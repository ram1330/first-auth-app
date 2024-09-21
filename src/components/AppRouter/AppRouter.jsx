import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" elemet={<HomePage />}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;