import axios from 'axios';
import {FETCH_USER} from './types';
import {FETCH_ALL_USER} from './types';
import {CREATE_USER} from './types';
import {LOGIN_USER} from './types';
import {ADD_CAT} from './types';
import {GET_CAT} from './types';
import {ADD_PRODUCT} from './types';
import {DELETE_PRODUCT} from './types';

import {ALL_PROD} from './types';



//-------------------------------------USERS------------------------------------
export const fetchUser = () => dispatch =>{
    axios.get('http://localhost:5000/api/current_user')
    .then(res => {

      dispatch({type: FETCH_USER , payload: res.data})});
  }

  export const loginUser = (props,callback)=> dispatch=>{
    axios.post('http://localhost:5000/auth/local',props)
    .then((res) => {

      callback();
      dispatch({type: LOGIN_USER, payload: res.data})
    });


  }

  export function createUser(props, callback){
  console.log(props);
  const request = axios.post('http://localhost:5000/user/signup',props)
   .then(() => callback());

  return{
    type: CREATE_USER,
    payload: request
  }
}

export const getUsers = () => dispatch =>{
    axios.get('http://localhost:5000/all-users')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_ALL_USER , payload: res.data})});
  }

  // ------------------------------PRODUCTS-------------------------------------

  export const addProduct = (props,callback)=> dispatch=>{
    console.log(props);
    axios.post('http://localhost:5000/add-product',props)
    .then((res) => {

      callback();
      dispatch({type: ADD_PRODUCT, payload: res})
    });

  }

  export const deleteProd = (props)=> dispatch=>{
    axios.delete('http://localhost:5000/delete-product',props)
    .then((res) => {
      console.log(res);

      dispatch({type: DELETE_PRODUCT, payload: res.data})
    });

  }

  export const allProd = ()=> dispatch=>{
    axios.get('http://localhost:5000/all-products')
    .then((res) => {
      console.log(res);

      dispatch({type: ALL_PROD, payload: res.data})
    });

  }



  //  ----------------------------CATEGORIES------------------------------------

  export const getCat = ()=> dispatch=>{
    axios.get('http://localhost:5000/get-category')
    .then((res) => {
      console.log(res);

      dispatch({type: GET_CAT, payload: res.data})
    });

  }


    export const addCat = (props,callback)=> dispatch=>{
      console.log(props);
      axios.post('http://localhost:5000/add-category',props)
      .then((res) => {

        callback();
        dispatch({type: ADD_CAT, payload: res})
      });

    }
