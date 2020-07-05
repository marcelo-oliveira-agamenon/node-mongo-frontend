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
        return Promise.resolve(response.data.authToken);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
