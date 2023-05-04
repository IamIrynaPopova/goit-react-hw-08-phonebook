import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
export default Contacts;
