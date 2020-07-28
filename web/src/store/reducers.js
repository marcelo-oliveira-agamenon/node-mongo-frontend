import initialState from "../ducks/state";

export const types = {
  USERLIST: "userList",
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
  return state;
}

export default rootReducer;
