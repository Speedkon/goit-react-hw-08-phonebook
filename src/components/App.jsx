import { useDispatch } from "react-redux";
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { Layout } from "./Layout";
import { refreshUser } from '../redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/MyContacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
      </Routes>
  )
}
