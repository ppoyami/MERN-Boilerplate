import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authApi } from '../service';
import { show } from '../store/modules/bannerReducer';

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authApi.auth().then(res => {
      if (!res.data.isAuth) dispatch(show(res.data.message, res.data.isAuth));
      setIsAuth(res.data.isAuth);
      setLoading(false);
    });
  }, []);

  return [loading, isAuth];
}
