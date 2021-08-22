# MongoDB - Express - React - Node 회원관리

## version: 1.0.0

### 회원가입 - 로그인 - 프로필페이지 - 로그아웃

![auth](https://user-images.githubusercontent.com/50171003/130345965-37ccb9ef-372f-4883-ad9d-304f1e61aed6.gif)

### 토큰 인증

![auth2](https://user-images.githubusercontent.com/50171003/130345967-02cdab9c-52f4-441b-9bf0-6325151b91bd.gif)

- client
  1. 리덕스 전역 상태 관리
  2. redux-thunk, redux-promise-middleware 미들웨어 사용
  3. axios
- server
  1. mongoose
  2. 쿠키(cookie-parser) 기반 토큰(jwt) 인증
  3. bcrypt 암호화
  4. cors 미들웨어 모듈

---
