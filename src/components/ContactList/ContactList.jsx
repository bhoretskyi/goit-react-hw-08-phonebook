import { StyledButton } from './ContactList.styled';
import { fetchContacts, deleteContact } from 'redux/Contacts/contactOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ContactList = () => {
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
  );
};
