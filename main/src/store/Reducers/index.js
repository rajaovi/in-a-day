import { combineReducers } from 'redux';
import TestReducer from './TestReducer';
import formReducer from './formReducer';

const reducers = combineReducers({
  Test: TestReducer,
  form: formReducer
  //other reducers come here...
});

export default reducers;
