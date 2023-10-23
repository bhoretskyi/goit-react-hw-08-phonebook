import { UserForm } from './Form/Form';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';
import { Header } from './Header/Header';
import Register from 'pages/Register';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { refreshUser } from 'redux/Auth/authOperations';
// import { Navigate, Route, Routes } from 'react-router-dom';


export const App = () => {
  // const dispatch = useDispatch();
  // const { isRefreshing } = useSelector((state = state.auth));

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);


  return  (
    <section>
    <Header/>
    <Register/>

      <h1>Phonebook</h1>
      <UserForm />

      <div>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </div>
    </section>

  )
}
