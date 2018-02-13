import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import catReducer from './cat';
import { reducer as formReducer } from 'redux-form';
import products from './products';
import usersReducer from './activeUser'


const rootReducer = combineReducers({
  auth:AuthReducer,
  form: formReducer,
  cat: catReducer,
  products: products,
  users: usersReducer

});


export default rootReducer;
