export const UPDATE_FORM_FIELD = 'UPDATE_FORM_FIELD';
export const SET_FIELD_ERROR = 'SET_FIELD_ERROR';
export const CLEAR_FIELD_ERROR = 'CLEAR_FIELD_ERROR';

export const updateFormField = (fieldName, value) => ({
  type: UPDATE_FORM_FIELD,
  payload: { fieldName, value }
});

export const setFieldError = (fieldName, errorMessage) => ({
  type: SET_FIELD_ERROR,
  payload: { fieldName, errorMessage }
});

export const clearFieldError = (fieldName) => ({
  type: CLEAR_FIELD_ERROR,
  payload: { fieldName }
});
