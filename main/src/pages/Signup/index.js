import React from 'react';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import Input from '../../components/input';

const Signup = () => {
  // const users = useSelector((state) => state.Test.users);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [formData, setFormData] = useState([]);
  // console.log('Users', users);

  const handleSignUpForm = (e) => {
    e.preventDefault();
    console.log('Fordata', formData);
    const userFormData = [
      {
        firstName: firstName,
        lastName: lastName,
        userName: userEmail,
        userEmail: userEmail,
        userPhoneNumber: userPhoneNumber,
        userPassword: userPassword
      }
    ];
    setFormData(userFormData);
    console.log('Here', userFormData);
  };

  return (
    <div>
      <h2>Signup - API User Test</h2>
      <form onSubmit={handleSignUpForm}>
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
            value={lastName}
            inputPlaceholder="Enter Last Name"
            onChangeInput={setLastName}
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
            inputType="number"
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
