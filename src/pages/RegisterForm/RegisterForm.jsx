import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/auth/operations';
import { TextField, Button } from '@mui/material';
import { RegisterFormStyles } from './RegisterFormStyles';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      createUser({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormStyles onSubmit={handleSubmit} autoComplete="off">
      <TextField
        size="small"
        label="Name"
        variant="outlined"
        placeholder="Enter your name"
        type="text"
        name="name"
        required
      />

      <TextField
        size="small"
        label="Email"
        variant="outlined"
        placeholder="example@gmail.com"
        type="email"
        name="email"
        required
      />

      <TextField
        size="small"
        label="Password"
        variant="outlined"
        placeholder="Password"
        type="password"
        name="password"
        required
      />

      <Button variant="contained" type="submit">
        Register
      </Button>
    </RegisterFormStyles>
  );
};

export default RegisterForm;
