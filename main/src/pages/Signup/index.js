import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Input from '../../components/input';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const users = useSelector((state) => state.Test.users);
  console.log('Users', users);
  return (
    <div>
      <h2>Signup - API User Test</h2>
      <form>
        <p>
          <label>First Name</label>
          <Input
            inputType="text"
            inputReqired={true}
            value={firstName}
            inputPlaceholder="Enter Firstname"
            onChangeInput={setFirstName}
          />
        </p>
        <p>
          <label>Last Name</label>
          <Input
            inputType="text"
            inputReqired={true}
            value={secondName}
            inputPlaceholder="Enter Last Name"
            onChangeInput={setSecondName}
          />
        </p>
        <p>
          <label>Useename</label>
          <Input
            inputType="text"
            inputReqired={true}
            value={userName}
            inputPlaceholder="Enter Username"
            onChangeInput={setUserName}
          />
        </p>
        <p>
          <label>User Email</label>
          <Input
            inputType="email"
            inputReqired={true}
            value={userEmail}
            inputPlaceholder="Enter Email Id"
            onChangeInput={setUserEmail}
          />
        </p>
        <p>
          <label>Phone Number</label>
          <Input
            inputType="phone"
            inputReqired={true}
            value={userPhoneNumber}
            inputPlaceholder="Enter Phone Number"
            onChangeInput={setUserPhoneNumber}
          />
        </p>
        <p>
          <label>Password</label>
          <Input
            inputType="password"
            inputReqired={true}
            value={userPassword}
            inputPlaceholder="Enter Password"
            onChangeInput={setUserPassword}
          />
        </p>
        <p>
          <button>Sumbit</button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
