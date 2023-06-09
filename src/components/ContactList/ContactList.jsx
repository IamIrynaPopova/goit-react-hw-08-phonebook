import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import ContactItem from '../ContactItem/ContactItem';
import {
  selectItems,
  selectIsLoading,
  selectError,
  selectFilter,
} from '../../redux/contacts/selectors';
import Loader from '../Loader/Loader';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const items = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterValue = useSelector(selectFilter);
  
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(contact => {
          const { id, name, number } = contact;
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
      {isLoading && <Loader />}
      {error !== null && <b>Sorry, error 🙁: {error}</b>}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
