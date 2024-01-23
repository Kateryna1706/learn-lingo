import { Auth } from 'context';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const authContex = useContext(Auth);
  const isLoggedIn = authContex.isLoggedIn;

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
