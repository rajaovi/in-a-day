import Input from '../../components/input';
import Button from '../../components/button';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormField, setFieldError, clearFieldError } from '../../store/Actions/formActions';
import {
  alphabetic,
  digitRegex,
  emailRegex,
  formControls,
  lowerCaseRegex,
  specialRegex,
  upperCaseRegex,
  validationMessages
} from './helper';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // Update Form Validation:
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const fieldErrors = useSelector((state) => state.form.fieldErrors);

  const validateFirstname = () => {
    if (formData.firstName.trim() === '') {
      dispatch(setFieldError(formControls.firstName, validationMessages.firstName.required));
    } else if (formData.firstName.length < 3) {
      dispatch(setFieldError(formControls.firstName, validationMessages.firstName.minLength));
    } else if (!alphabetic.test(formData.firstName)) {
      dispatch(setFieldError(formControls.firstName, validationMessages.firstName.pattern));
    } else if (formData.firstName.length > 45) {
      dispatch(setFieldError(formControls.firstName, validationMessages.firstName.maxlength));
    } else {
      dispatch(clearFieldError(formControls.firstName));
    }
  };

  const validateLastname = () => {
    if (formData.lastName.trim() === '') {
      dispatch(setFieldError(formControls.lastName, validationMessages.lastName.required));
    } else if (formData.lastName.length < 3) {
      dispatch(setFieldError(formControls.lastName, validationMessages.lastName.minLength));
    } else if (!alphabetic.test(formData.lastName)) {
      dispatch(setFieldError(formControls.lastName, validationMessages.lastName.pattern));
    } else if (formData.lastName.length > 45) {
      dispatch(setFieldError(formControls.lastName, validationMessages.lastName.maxlength));
    } else {
      dispatch(clearFieldError(formControls.lastName));
    }
  };

  const validateUsername = () => {
    if (formData.userName.trim() === '') {
      dispatch(setFieldError(formControls.userName, validationMessages.userName.required));
    } else if (formData.userName.length < 3) {
      dispatch(setFieldError(formControls.userName, validationMessages.userName.minLength));
    } else if (!alphabetic.test(formData.userName)) {
      dispatch(setFieldError(formControls.userName, validationMessages.userName.pattern));
    } else if (formData.userName.length > 45) {
      dispatch(setFieldError(formControls.userName, validationMessages.userName.maxlength));
    } else {
      dispatch(clearFieldError(formControls.userName));
    }
  };

  const validateUserEmail = () => {
    if (formData.userEmail.trim() === '') {
      dispatch(setFieldError(formControls.userEmail, validationMessages.userEmail.required));
    } else if (!emailRegex.test(formData.userEmail)) {
      dispatch(setFieldError(formControls.userEmail, validationMessages.userEmail.invalid));
    } else {
      dispatch(clearFieldError(formControls.userEmail));
    }
  };

  const validatePhoneNumber = () => {
    if (formData.userPhoneNumber.trim() === '') {
      dispatch(
        setFieldError(formControls.userPhoneNumber, validationMessages.userPhoneNumber.required)
      );
    } else if (formData.userPhoneNumber.length < 9) {
      dispatch(
        setFieldError(formControls.userPhoneNumber, validationMessages.userPhoneNumber.minLength)
      );
    } else {
      dispatch(clearFieldError(formControls.userPhoneNumber));
    }
  };

  const validatePassword = () => {
    if (formData.userPassword.trim() === '') {
      dispatch(setFieldError(formControls.userPassword, validationMessages.userPassword.required));
    } else if (formData.userPassword.length < 8) {
      dispatch(setFieldError(formControls.userPassword, validationMessages.userPassword.minLength));
    } else if (!upperCaseRegex.test(formData.userPassword)) {
      dispatch(setFieldError(formControls.userPassword, validationMessages.userPassword.upperCase));
    } else if (!lowerCaseRegex.test(formData.userPassword)) {
      dispatch(setFieldError(formControls.userPassword, validationMessages.userPassword.lowerCase));
    } else if (!digitRegex.test(formData.userPassword)) {
      dispatch(setFieldError(formControls.userPassword, validationMessages.userPassword.numeric));
    } else if (!specialRegex.test(formData.userPassword)) {
      dispatch(
        setFieldError(formControls.userPassword, validationMessages.userPassword.specialChar)
      );
    } else {
      dispatch(clearFieldError(formControls.userPassword));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields before submitting
    validateFirstname();
    validateLastname();
    validateUsername();
    validateUserEmail();
    validatePhoneNumber();
    validatePassword();

    // If no errors, proceed with form submission
    if (Object.keys(fieldErrors).length === 0) {
      // Handle form submission logic
      console.log('Form submitted:', formData);
      navigate('/');
    } else {
      console.log('Form has validation errors');
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField(name, value));
  };

  return (
    <div>
      <h2>Signup - API User Test</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>First Name</label>
          <Input
            inputType="text"
            inputName="firstName"
            inputPlaceholder="Enter Firstname"
            value={formData.firstName}
            onChangeInput={handleInputChange}
            onBlurInput={validateFirstname}
          />
        </p>
        <p>
          {fieldErrors.firstName && <span style={{ color: 'red' }}>{fieldErrors.firstName}</span>}
        </p>
        <p>
          <label>Last Name</label>
          <Input
            inputType="text"
            inputName="lastName"
            value={formData.lastName}
            inputPlaceholder="Enter Last Name"
            onChangeInput={handleInputChange}
            onBlurInput={validateLastname}
          />
        </p>
        <p>
          {fieldErrors.lastName && <span style={{ color: 'red' }}>{fieldErrors.lastName}</span>}
        </p>
        <p>
          <label>User Name</label>
          <Input
            inputType="text"
            inputName="userName"
            value={formData.userName}
            inputPlaceholder="Enter Username"
            onChangeInput={handleInputChange}
            onBlurInput={validateUsername}
          />
        </p>
        <p>
          {fieldErrors.userName && <span style={{ color: 'red' }}>{fieldErrors.userName}</span>}
        </p>
        <p>
          <label>User Email</label>
          <Input
            inputType="email"
            inputName="userEmail"
            value={formData.userEmail}
            inputPlaceholder="Enter Email Id"
            onChangeInput={handleInputChange}
            onBlurInput={validateUserEmail}
          />
        </p>
        <p>
          {fieldErrors.userEmail && <span style={{ color: 'red' }}>{fieldErrors.userEmail}</span>}
        </p>
        <p>
          <label>Phone Number</label>
          <Input
            inputType="number"
            inputName="userPhoneNumber"
            value={formData.userPhoneNumber}
            inputPlaceholder="Enter Phone Number"
            onChangeInput={handleInputChange}
            onBlurInput={validatePhoneNumber}
          />
        </p>
        <p>
          {fieldErrors.userPhoneNumber && (
            <span style={{ color: 'red' }}>{fieldErrors.userPhoneNumber}</span>
          )}
        </p>
        <p>
          <label>Password</label>
          <Input
            inputType="password"
            inputName="userPassword"
            value={formData.userPassword}
            inputPlaceholder="Enter Password"
            onChangeInput={handleInputChange}
            onBlurInput={validatePassword}
          />
        </p>
        <p>
          {fieldErrors.userPassword && (
            <span style={{ color: 'red' }}>{fieldErrors.userPassword}</span>
          )}
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
