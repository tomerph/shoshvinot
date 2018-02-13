import {GET_CAT} from '../actions/types';



export default function (state= null, action){

  switch(action.type){
      case GET_CAT:
      return action.payload ;

    
    default:
    return state;
  }
}
