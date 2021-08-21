require('dotenv').config();
const { User } = require('../models/User');

const auth = (req, res, next) => {
  // 토큰 가져오기
  const token = req.cookies.w_auth;
  // 복호화 -> model static 함수를 사용
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true,
      });

    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
