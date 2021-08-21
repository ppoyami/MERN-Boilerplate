const { User } = require('../../models/User');

exports.auth = (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
};

exports.post_join = (req, res) => {
  // TODO: 생년월일 저장가능한 형태로 파싱하기(Date 객체 이용), 성별 저장
  /*
  ] req.body {
    password: '12345',
    confirmPassword: '12345',
    email: 'scvd07@naver.com',
    name: '고양이',
    year: '1998',
    month: '4',
    day: '8',
    gender: '선택안함'
 }
  */
  const user = new User(req.body);

  console.log('req.body', req.body);

  user.save((err, user) => {
    if (err)
      return res.json({
        success: false,
        message: '이미 존재하는 이메일입니다.',
        err,
      });
    return res.status(200).json({
      success: true,
      user,
      message: `${user.name}님 반갑습니다!`,
    });
  });
};

exports.post_login = (req, res) => {
  // * email -> user
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loggedIn: false,
        message: '이메일을 찾을 수 없습니다.',
        err,
      });
    // * compare password
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loggedIn: false,
          message: '패스워드가 일치하지 않습니다.',
          err,
        });
      // * token
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        // user에 저장된 토큰을 브라우저 쿠키에 저장한다.
        res
          .cookie('x_auth', user.token)
          .status(200)
          .json({
            loggedIn: true,
            userId: user._id,
            message: `${user.name}님 환영합니다.`,
          });
      });
    });
  });
};

exports.get_logout = (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err)
      return res.json({ success: false, message: `알 수 없는 오류 발생`, err });
    return res.status(200).send({
      success: true,
      message: `${user.name}님 안녕히 가세요.`,
    });
  });
};
