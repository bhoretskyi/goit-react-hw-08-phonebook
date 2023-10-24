// import { Header } from './Header/Header';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/Auth/authOperations';
import { Route, Routes } from 'react-router-dom';
import { PrivateRout } from './PrivateRout';
import { RestrictedRout } from './RestrictedRout';

const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/LogIn'));
const Contactlist = lazy(() => import('components/ContactList/ContactList'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector((state => state.auth));

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (<h3>Refreshing user</h3>):(
    <section>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRout redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRout redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRout component={<Contactlist/>} redirectTo="/login" />

            }
          />
        </Route>
      </Routes>
    </section>
  );
};
