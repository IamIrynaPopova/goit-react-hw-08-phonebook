import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import {ContactsStyles } from './ContactsStyles'

const Contacts = () => {
  return (
    <ContactsStyles>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContactsStyles>
  );
};
export default Contacts;
