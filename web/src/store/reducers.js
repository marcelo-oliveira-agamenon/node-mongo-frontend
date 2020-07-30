import initialState from "../ducks/state";

export const types = {
  USERLIST: "userList",
  LOGGEDUSER: "loggedUser",
  APITOKEN: "apiToken",
  ERROR: "error",
};

function rootReducer(state = initialState, action) {
  if (action.type === types.USERLIST) {
    return Object.assign({}, state, {
      userList: action.payload,
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
