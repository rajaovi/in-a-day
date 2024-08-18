import { useState } from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { useNavigate } from 'react-router-dom';
import { FORMCONTROLS } from './helper';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    password: ''
  });
  const [fieldErrors, setFieldError] = useState({
    firstName: '',
    phoneNumber: '',
    password: ''
  });

  const navigate = useNavigate();

  const validate = (name, value) => {
    let error = '';
    const phonePattern = /^[0-9]{10}$/;

    switch (name) {
      case FORMCONTROLS.FIRSTNAME:
        if (!value) {
          error = 'First name is required';
        }
        break;
      case FORMCONTROLS.PHONENUMBER:
        if (!phonePattern.test(value)) {
          error = 'Phone number must be 10 digits';
        }
        break;
      case FORMCONTROLS.PASSWORD:
        if (value.length < 6) {
          error = 'Password must be at least 6 characters';
        }
        break;
      default:
        break;
    }
    setFieldError((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fieldErrors.firstName && !fieldErrors.password && !fieldErrors.phoneNumber) {
      navigate('/');
    } else {
      console.log('Form has validation errors', fieldErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  return (
    <div>
      <h2>Signup - API User Test</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <Input
            inputType="text"
            inputName={FORMCONTROLS.FIRSTNAME}
            inputPlaceholder="Enter Firstname"
            value={formData.firstName}
            onBlurInput={handleInputChange}
          />
        </p>
        <p>
          {fieldErrors.firstName && <span style={{ color: 'red' }}>{fieldErrors.firstName}</span>}
        </p>
        <p>
          <label>Phone Number</label>
          <Input
            inputType="number"
            inputName={FORMCONTROLS.PHONENUMBER}
            value={formData.phoneNumber}
            inputPlaceholder="Enter Phone Number"
            onBlurInput={handleInputChange}
          />
        </p>
        <p>
          {fieldErrors.phoneNumber && (
            <span style={{ color: 'red' }}>{fieldErrors.phoneNumber}</span>
          )}
        </p>
        <p>
          <label>Password</label>
          <Input
            inputType="password"
            inputName={FORMCONTROLS.PASSWORD}
            value={formData.password}
            inputPlaceholder="Enter Password"
            onBlurInput={handleInputChange}
          />
        </p>
        <p>
          {fieldErrors.password && <span style={{ color: 'red' }}>{fieldErrors.password}</span>}
        </p>
        <p>
          <Button
            text="Submit"
            btnSize="primary"
            btnColor="blue"
            handleButtonClick={handleSubmit}
          />
        </p>
      </form>
    </div>
  );
};

export default Signup;
