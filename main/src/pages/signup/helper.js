export const validationMessages = {
  firstName: {
    required: 'First Name is required',
    minLength: 'First Name must be at least 3 characters',
    maxlength: 'First Name should be no more than 45 characters',
    pattern: 'First Name only a alphabetic'
  },
  lastName: {
    required: 'Last Name is required',
    minLength: 'Last Name must be at least 3 characters',
    maxlength: 'Last Name should be no more than 45 characters',
    pattern: 'Last Name only a alphabetic'
  },
  userName: {
    required: 'User Name is required',
    minLength: 'User Name must be at least 3 characters',
    maxlength: 'User Name should be no more than 45 characters',
    pattern: 'User Name only a alphabetic'
  },
  userEmail: {
    required: 'User Email is required',
    invalid: 'Invalid email format'
  },
  userPhoneNumber: {
    required: 'Phone Number is required',
    minLength: 'Phone Number must be at least 10 characters'
  },
  userPassword: {
    required: 'Password is required',
    minLength: 'Password must be at least 8 characters',
    upperCase: 'Password must contain at least one uppercase letter',
    lowerCase: 'Password must contain at least one lowercase letter',
    numeric: 'Password must contain at least one digit',
    specialChar: 'Password must contain at least one special character'
  }
};

export const upperCaseRegex = /[A-Z]/;
export const lowerCaseRegex = /[a-z]/;
export const digitRegex = /\d/;
export const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const alphabetic = /^[A-Za-z]+$/;

export const formControls = {
  firstName: 'firstName',
  lastName: 'lastName',
  userName: 'userName',
  userEmail: 'userEmail',
  userPhoneNumber: 'userPhoneNumber',
  userPassword: 'userPassword'
};
