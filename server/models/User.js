const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const saltRounds = 10;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  image: String,
  password: {
    type: String,
    minglength: 5,
  },
  token: {
    type: String,
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  /*
  console.log('pre', user);
   pre {
   _id: 6120d8afc0bb11576cc76d33,
   password: '12345',
   email: 'scvd07@naver.com',
   name: '고양이'
 }
  
  */

  if (user.isModified('password')) {
    bcrypt.hash(user.password, saltRounds, function (err, hash) {
      // Store hash in your password DB.
      if (err) return next(err);
      user.password = hash;
      next();
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (!isMatch) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function (callback) {
  const user = this;
  const token = jwt.sign(user._id.toHexString(), process.env.TOKEN_KEY);

  user.token = token;

  user.save((err, user) => {
    if (err) callback(err);
    callback(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  jwt.verify(token, process.env.TOKEN_KEY, function (err, decode) {
    user.findOne({ _id: decode, token: token }, function (err, user) {
      if (err) return cb(err);
      console.log('findByToken', user);
      cb(null, user);
    });
  });
};

// 스키마 설정 이후 생성해서 export 한다.
const User = mongoose.model('User', userSchema);

module.exports = { User };
