import { Routes, Route, NavLink } from 'react-router-dom';
import { Contacts } from '../pages/Contacts/Contacts';
import { RegisterForm } from '../pages/RegisterForm/RegisterForm';
import { LoginForm } from '../pages/LoginForm/LoginForm';

export const App = () => {
  return (
    <>
      <div>
        <header>
          <nav>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};
