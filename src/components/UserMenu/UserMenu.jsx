import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Container>
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
    </Container>
  );
};

export default UserMenu;


