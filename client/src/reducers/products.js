import {ALL_PROD} from '../actions/types';
import _ from 'lodash';


export default function (state= null, action){

  switch(action.type){


      case ALL_PROD:
      return action.payload;


    default:
    return state;
  }
}
