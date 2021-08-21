export default class Auth {
  constructor(axiosInstance) {
    this.api = axiosInstance;
  }
  join(data) {
    return this.api.post('/join', data);
  }
  login(data) {
    return this.api.post('/login', data, { withCredentials: true });
  }
  logout() {
    return this.api.get('/logout', { withCredentials: true });
  }
  auth() {
    return this.api.get('/auth');
  }
}
