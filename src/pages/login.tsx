import React from 'react';
import Header from '../components/header';
import Login from '../components/login';

const LoginPage: React.FC = () => {
  return (
    <>
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login/>
    </>
  );
};

export default LoginPage;
