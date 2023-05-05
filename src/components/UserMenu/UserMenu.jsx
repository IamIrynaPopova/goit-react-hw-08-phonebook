import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div>
      <b>Hello,{name}!😉</b>
      <p>{email}</p>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="neutral"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default UserMenu;
