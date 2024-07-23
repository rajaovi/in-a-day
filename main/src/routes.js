import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashbaord" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutePage;
