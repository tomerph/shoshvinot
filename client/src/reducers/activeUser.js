import {LOGIN_USER} from '../actions/types';
import {FETCH_ALL_USER} from '../actions/types';

export default function (state= null, action){

  switch(action.type){
      case LOGIN_USER:
      return action.payload ;

      case FETCH_ALL_USER:
      return action.payload;


    default:
    return state;
  }
}
