const initialState = {
  userList: [],
  apiToken: "",
  error: ""
};

function rootReducer(state = initialState, action) {
  if (action.type === "userList") {
    return Object.assign({}, state, {
      userList: action.payload
    });
  }
  if (action.type === "error") {
    return Object.assign({}, state, {
      error: action.payload.response
    });
  }
  if (action.type === "apiToken") {
    return Object.assign({}, state, {
      apiToken: action.payload
    });
  }
  return state;
}

export default rootReducer;
