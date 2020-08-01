import axios from "axios";
import envs from "../config";
import { types } from "../store/reducers";

//Login function
export function login(username, password) {
  return function (dispatch) {
    return axios
      .post(`${envs.API_URL}/login`, {
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch({
          type: types.APITOKEN,
          payload: response.data,
        });
        dispatch({
          type: types.LOGGEDUSER,
          payload: response.data.loggedUser,
        });
        return Promise.resolve(response.data.authToken);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error.response.data,
        });
        return Promise.reject(error.response.data);
      });
  };
}

//Reset password function
export function resetPassword(username, password) {
  return function (dispatch) {
    return axios
      .post(`${envs.API_URL}/resetPassword`, {
        email: username,
        newPassword: password,
      })
      .then((response) => {
        if (response.data.message === "Your password is updated")
          return Promise.resolve(true);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error.response.data,
        });
        return Promise.reject(error.response.data);
      });
  };
}

//Logout function
export function logout() {
  return function (dispatch) {
    dispatch({
      type: types.APITOKEN,
      payload: "",
    });
    dispatch({
      type: types.LOGGEDUSER,
      payload: "",
    });
    return Promise.resolve(true);
  };
}
