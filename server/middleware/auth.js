require('dotenv').config();
const { User } = require('../models/User');

const auth = (req, res, next) => {
  // TODO: 토큰을 못가져옴 (undefined)
  const token = req.cookies.x_auth;
  // 복호화 -> model static 함수를 사용
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    console.log('findByToken:', token);
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
        message: '권한이 없습니다.',
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
