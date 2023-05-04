import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Contacts from '../pages/Contacts/Contacts';
import Layout from './Layout/Layout';
import LoginForm from '../pages/LoginForm/LoginForm';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import Home from '../pages/Home/Home';
import { refreshUser } from '../redux/auth/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
export default App;
