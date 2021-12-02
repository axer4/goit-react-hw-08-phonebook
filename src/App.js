import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Registration from './components/register/register';
import Login from './components/login/Login'
import AppBar from './components/AppBar';
import HomePage from './components/homepage/HomePage'
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PhoneBook from './components/PhoneBook/PhoneBook';
import PublicRoute from './components/PublicRoute';
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  },[dispatch])
  return <>
    <AppBar/>
    <Switch>
      <PublicRoute path='/' exact ><HomePage /></PublicRoute>
      <PublicRoute exact path="/register" redirectTo = '/contacts' restricted ><Registration/></PublicRoute>
      <PublicRoute exact path="/login" redirectTo = '/contacts' restricted ><Login/></PublicRoute>
      <PrivateRoute path = '/contacts' redirectTo = '/login'><PhoneBook/></PrivateRoute>
    </Switch>
  </>
}
