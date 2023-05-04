import { Routes, Route } from 'react-router-dom';
import Contacts from '../pages/Contacts/Contacts';
import Layout from './Layout/Layout';
import LoginForm from '../pages/LoginForm/LoginForm';
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import Home from '../pages/Home/Home';

const App = () => {
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
