import axios from "axios";
import envs from "../config";
import { types } from "../store/reducers";

//functions
//fetch a list of users from API
export function fetchUserList() {
  return function (dispatch) {
    return axios
      .get(`${envs.API_URL}/api/users`)
      .then((response) => {
        dispatch({
          type: types.USERLIST,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//add new user in the database from the API
export function addNewUser(name, email, password, phone) {
  return function (dispatch) {
    return axios
      .post(`${envs.API_URL}/api/users/add`, {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((response) => {
        return Promise.resolve(response.data.message);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//delete a user in the database from the API
export function deleteUser(idUser) {
  return function (dispatch) {
    return axios
      .delete(`${envs.API_URL}/api/users/delete/${idUser}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
