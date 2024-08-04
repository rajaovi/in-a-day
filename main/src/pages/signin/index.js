import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';
import ErrorMessage from '../../components/errorMessage';
import './index.scss';

const Signin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showUserError, setShowUserError] = useState(false);
  const [showPasswordError, setPasswordError] = useState(false);

  const handleSignin = () => {
    if (userName == '') {
      setShowUserError(true);
    } else {
      setShowUserError(false);
    }
    if (password == '') {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (userName && password) {
      navigate('/dashbaord');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const usernameText = 'Username';
  const passwordText = 'Password';
  const errorMsgPrefix = 'Please Enter';

  return (
    <div className="signInForm">
      <h2>Sign In</h2>
      <form>
        <p>
          <label>User Name</label>
          <Input
            inputType="text"
            inputReqired={false}
            value={userName}
            inputPlaceholder="Enter Last Name"
            onChangeInput={setUserName}
          />
          {showUserError ? <ErrorMessage text={`${errorMsgPrefix} ${usernameText}`} /> : ''}
        </p>
        <p>
          <label>Password</label>
          <Input
            inputType="password"
            inputReqired={false}
            value={password}
            inputPlaceholder="Enter Password"
            onChangeInput={setPassword}
          />
          {showPasswordError ? <ErrorMessage text={`${errorMsgPrefix} ${passwordText}`} /> : ''}
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
