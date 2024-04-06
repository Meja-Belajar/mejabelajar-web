import { current } from '@reduxjs/toolkit';
import { UserContext } from '@src/contexts/UserContext';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

interface LoginAuthProps {
  mustLogin: boolean;
}

const AuthRedirector = ({ mustLogin }: LoginAuthProps) => {

  const { user } = useContext(UserContext);
  const currentUser = useSelector((state: any) => state.user.currentUser);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log(login?.status, mustLogin);

    // if user already login and want to access authentication page then navigate to home

    if(currentUser && mustLogin === false) {
      navigate('/');
    } 
  
    // if user not login and want to access protected page then navigate to login

    if(!currentUser && mustLogin === true) {
      navigate('/login');
    }
  }, []);
  
  return <Outlet />

};

export {
  AuthRedirector
};