import axios from "axios";
import envs from "../config";

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
          type: "apiToken",
          payload: response.data,
        });
        return Promise.resolve(response.data.authToken);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}
