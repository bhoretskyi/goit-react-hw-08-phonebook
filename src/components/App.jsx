
// import { Header } from './Header/Header';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { refreshUser } from 'redux/Auth/authOperations';
import { NavLink, Route, Routes } from 'react-router-dom';




const Register = lazy(() => import('../pages/Register'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/LogIn')); 
const Contactlist = lazy(() => import('components/ContactList/ContactList'));


export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useSelector((state = state.auth));

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);


  return  (
    // <section>
    // <Header/>
    // <Register/>

    //   <h1>Phonebook</h1>
    //   <UserForm />

    //   <div>
    //     <h2>Contacts</h2>
    //     <ContactFilter />
    //     <ContactList />
    //   </div>
    // </section>
    <section>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
    <Route path="/" element={<Layout />}>

      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contacts" element={<Contactlist />} />
      </Route>
    </Routes>
  </section>
  )
}
