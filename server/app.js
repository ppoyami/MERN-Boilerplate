const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('./config');

class App {
  constructor() {
    this.app = express();
    // 데이터 베이스 연결
    this.dbConnection();
    // 미들웨어 설정
    this.setMiddleWare();
    // 라우터 설정
    this.getRouting();
  }

  dbConnection() {
    const connect = mongoose
      .connect(config.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => console.log('MongoDB Connected!'))
      .catch(err => console.log(err));
  }

  setMiddleWare() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json()); // M: body-parser

    this.app.use(
      cors({ origin: ['http://localhost:3000'], credentials: true })
    ); // M: 서버에서 cors 설정
    this.app.use(cookieParser());
  }

  getRouting() {
    this.app.use(require('./controllers'));
  }
}

module.exports = new App().app;
