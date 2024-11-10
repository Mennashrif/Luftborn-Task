import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute, ProtectedRouteProps } from './auth-guard';

// login Pages Routes
import Login from '../components/account/login';
import { Layout } from '../layouts/main-layout';
import Profile from '../components/profile/profile';
import User from '../components/users/user';


const RoutesConfigurations = () => {
  const ele = localStorage.getItem('token');

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    // isAuthenticated: !!session.isAuthenticated,
    isAuthenticated: ele === null || ele === '' ? false : true,
    authenticationPath: '/login',
  };

  return (
    <div>
      <Routes>
        {/* No Auth Required */}
        <Route path='login' element={<Login />} />
        {/* Auth Required */}
        <Route path='/' element={<ProtectedRoute {...defaultProtectedRouteProps}  outlet={<Layout />}/>}>
            <Route path='/profile' element={<Profile />} />
            <Route path='/users' element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesConfigurations;
