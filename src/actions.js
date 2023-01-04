/*
Here all the actions are defined.
Example of defining an actoin is as follows
export const repairAdded = (var1,va2) => {
  return {
    type: "actionType1",
    payload: {
      var1,
      var2
    }
  }
}
*/

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const loginAction = (username)=> {
  return {
    type : LOGIN,
    payload : username,
  }
}
export const logoutAction = ()=>{
  return {type:LOGOUT}
}
