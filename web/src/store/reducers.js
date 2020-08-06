import initialState from "../ducks/state";

export const types = {
  USERLIST: "userList",
  LOGGEDUSER: "loggedUser",
  FROMUSERTOUSER: "messFromUserToUser",
  SELECTEDUSER: "selectedUser",
  APITOKEN: "apiToken",
  ERROR: "error",
};

function rootReducer(state = initialState, action) {
  if (action.type === types.USERLIST) {
    return Object.assign({}, state, {
      userList: action.payload,
    });
  }
  if (action.type === types.FROMUSERTOUSER) {
    return Object.assign({}, state, {
      messFromUserToUser: action.payload,
    });
  }
  if (action.type === types.SELECTEDUSER) {
    return Object.assign({}, state, {
      selectedUser: action.payload,
    });
  }
  if (action.type === types.ERROR) {
    return Object.assign({}, state, {
      error: action.payload,
    });
  }
  if (action.type === types.APITOKEN) {
    return Object.assign({}, state, {
      apiToken: action.payload.authToken,
    });
  }
  if (action.type === types.LOGGEDUSER) {
    return Object.assign({}, state, {
      loggedUser: action.payload,
    });
  }
  return state;
}

export default rootReducer;
