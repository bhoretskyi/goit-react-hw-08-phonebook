import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const RestrictedRout = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector((state = state.auth.isLoggedin));
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
