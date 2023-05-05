import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail,selectUserName} from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <b>Hello,{name}!😉</b>
      <p>{email}</p>
      <Button  variant="contained" onClick={() => dispatch(logOut())}>Logout</Button>
    </div>
  );
};

export default UserMenu;
