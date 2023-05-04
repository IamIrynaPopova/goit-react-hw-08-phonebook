import { useSelector, useDispatch } from 'react-redux';

import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const email = useSelector(state => state.auth.user.email);
  const name = useSelector(state => state.auth.user.name);
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
