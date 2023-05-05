import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import Layout from './Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const RegisterPage = lazy(() => import('../pages/RegisterForm/RegisterForm'));
const LoginPage = lazy(() => import('../pages/LoginForm/LoginForm'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/register"
          element={<PublicRoute>{<RegisterPage />}</PublicRoute>}
        />
        <Route
          path="/login"
          element={<PublicRoute>{<LoginPage />}</PublicRoute>}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute>{<ContactsPage />}</PrivateRoute>}
        />
      </Route>
    </Routes>
  );
};
export default App;
