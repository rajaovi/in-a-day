import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignin = () => {
    if (userName !== '' && password !== '') {
      navigate('/dashbaord');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <p>
          <label>User Name</label>
          <Input
            inputType="text"
            inputReqired={true}
            value={userName}
            inputPlaceholder="Enter Last Name"
            onChangeInput={setUserName}
          />
        </p>
        <p>
          <label>Password</label>
          <Input
            inputType="password"
            inputReqired={true}
            value={password}
            inputPlaceholder="Enter Password"
            onChangeInput={setPassword}
          />
        </p>
        <div>
          <button onClick={handleSignin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
