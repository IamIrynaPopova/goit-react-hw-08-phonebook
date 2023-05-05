import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { Container, theme, User } from './UserMenuStyled';

const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Container>
      <User>Hello,{name}!😉</User>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="neutral"
          size="small"
          onClick={() => dispatch(logOut())}
        >
          Logout
        </Button>
      </ThemeProvider>
    </Container>
  );
};

export default UserMenu;
