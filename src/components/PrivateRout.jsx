import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRout = ({ component: Component, redirectTo: adress }) => {
  const { isLoggedin, isRefreshing } = useSelector(state => state.auth);

  const shouldRedirect = !isLoggedin && !isRefreshing;

  return shouldRedirect ? <Navigate to={adress} /> : Component;
};
