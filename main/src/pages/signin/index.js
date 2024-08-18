import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/input';
import Button from '../../components/button';
import ErrorMessage from '../../components/errorMessage';
import './index.scss';
import { USERS } from '../signup/helper';

const Signin = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showUserError, setShowUserError] = useState(false);
  const [showPasswordError, setPasswordError] = useState(false);
  const [data, setData] = useState('');

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('./../../dummyData.json'); // Use absolute path from the public directory
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     const result = await response.json();
    //     setData(result.users); // Assuming the JSON file has a 'users' array
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };

    // fetchData();
    setData(USERS);
  }, []);

  const handleSignin = async () => {
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
      const user = data.find((user) => user.username === userName && user.password === password);
      if (user) {
        navigate('/dashbaord');
      } else {
        setShowUserError(true);
        setPasswordError(true);
      }
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
            onBlurInput={(e) => setUserName(e.target.value)}
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
            onBlurInput={(e) => setPassword(e.target.value)}
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
