/*
reducer is defined here and is exproted.
This reducer should handle all the actions.
Example of how to use reducer is as follows:
const reducer = (state = [],action = {}) => {
  switch(action.type){
    case 'actionType1': 
      return changedState1;
    
    case 'actionType2':
      return changedState2;
    default: 
      return state;
    }
  
export default reducer;
*/
import { combineReducers } from "redux";
import { LOGIN, LOGOUT } from "./actions";

const initalState = {
    loggedIn : false,
    username : ''
};

const authReducer = (state=initalState,action) => {
  switch(action.type){
    case LOGIN : return {
      loggedIn : true,
      username : action.payload,
    }
    case LOGOUT : return {
      loggedIn : false,
      username : '',
    }
    default: return state
  }
}
const reducers = combineReducers({
  auth : authReducer
})
export default reducers;