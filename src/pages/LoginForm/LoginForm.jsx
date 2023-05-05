import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { LoginFormStyles } from './LoginFormStyles';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginFormStyles onSubmit={handleSubmit} autoComplete="off">
      <TextField
        size="small"
        label="Email"
        variant="outlined"
        placeholder="example@gmail.com"
        fullWidth
        margin="normal"
        name="email"
        type="email"
        required
      />

      <TextField
        size="small"
        label="Password"
        variant="outlined"
        placeholder="Password"
        fullWidth
        margin="normal"
        name="password"
        type="password"
        required
      />
      <Button variant="contained" type="submit" sx={{ mt: 2 }}>
        Log In
      </Button>
    </LoginFormStyles>
  );
};

export default LoginForm;
