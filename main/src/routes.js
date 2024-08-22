import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import FixedComponent from './pages/fixedComponent';

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashbaord" element={<Dashboard />} />
      <Route path="/fixedcomponent" element={<FixedComponent />} />
    </Routes>
  );
};

export default RoutePage;
