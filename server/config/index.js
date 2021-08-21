const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

if (process.env.NODE_ENV === PRODUCTION) {
  module.exports = require('./prod');
} else {
  // Q: process.env.NODE_ENV는 undefined이다. 프로덕션이랑 개발환경 구분은 어떻게?
  module.exports = require('./dev');
}
