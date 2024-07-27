import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';

const Signin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    if (userName && password) {
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
          <Button text="Sigin" btnSize="primary" btnColor="blue" handleButtonClick={handleSignin} />
          <Button
            text="Signup"
            btnSize="primary"
            btnColor="grey"
            handleButtonClick={handleSignup}
          />
        </div>
      </form>
    </div>
  );
};

export default Signin;
