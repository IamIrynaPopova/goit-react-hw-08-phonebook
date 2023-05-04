import { useDispatch } from 'react-redux';
import {deleteContact} from '../../redux/contacts/operations';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.item}>
      {name}: {phone}
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
