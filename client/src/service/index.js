import axios from 'axios';
import Auth from './auth';

const LOCAL_SERVER = 'http://localhost:5500';

const AUTH_ROUTE = '/accounts';

const instance = axios.create({ baseURL: `${LOCAL_SERVER}${AUTH_ROUTE}` });

export const authApi = new Auth(instance);
