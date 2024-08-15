import { UPDATE_FORM_FIELD, SET_FIELD_ERROR, CLEAR_FIELD_ERROR } from '../Actions/formActions';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    userName: '',
    userEmail: '',
    userPhoneNumber: '',
    userPassword: ''
  },
  fieldErrors: {}
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.fieldName]: action.payload.value
        }
      };
    case SET_FIELD_ERROR:
      return {
        ...state,
        fieldErrors: {
          ...state.fieldErrors,
          [action.payload.fieldName]: action.payload.errorMessage
        }
      };
    case CLEAR_FIELD_ERROR:
      if (action.payload.fieldName) {
        const { [action.payload.fieldName]: removedError, ...restErrors } = state.fieldErrors;
        if (removedError) {
          console.log(removedError);
        }
        return {
          ...state,
          fieldErrors: {
            ...restErrors
          }
        };
      }
      break;
    default:
      return state;
  }
};

export default formReducer;
