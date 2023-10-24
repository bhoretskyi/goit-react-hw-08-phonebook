import { StyledButton } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/Contacts/contactOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { UserForm } from '../Form/Form';
import { ContactFilter } from '../ContactFilter/ContactFilter';



export default function ContactList () {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const selectFilteredContacts = () => {

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
    
    <h1>Phonebook</h1>
       <UserForm />

       <div>
         <h2>Contacts</h2>
         <ContactFilter />

      </div>
    <ul>
      {selectFilteredContacts().map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.phone}
          </p>
          <StyledButton onClick={() => onDeleteContact(contact.id)}>
            Delete
          </StyledButton>
        </li>
      ))}
    </ul>
    </div>
  );
};
