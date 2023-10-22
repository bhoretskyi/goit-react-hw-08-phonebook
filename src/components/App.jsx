import { UserForm } from './Form/Form';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <section>
      <h1>Phonebook</h1>
      <UserForm />

      <div>
        <h2>Contacts</h2>
        <ContactFilter/>
        <ContactList />
      </div>
    </section>
  );
};
