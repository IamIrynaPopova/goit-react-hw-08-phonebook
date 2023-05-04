import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail,selectUserName} from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <b>Hello,{name}!😉</b>
      <p>{email}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

export default UserMenu;
