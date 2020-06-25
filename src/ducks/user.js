import axios from "axios";
import envs from "../config";

//functions
//fetch a list of users from API
export function fetchUserList() {
  return function (dispatch) {
    return axios
      .get(`${envs.API_URL}/api/users`)
      .then((response) => {
        dispatch({
          type: "userList",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}

//add new user in the database from the API
export function addNewUser(username, password) {
  return function (dispatch) {
    return axios
      .post(`${envs.API_URL}/api/users/add`, {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}

//delete a user in the database from the API
export function deleteUser(idUser) {
  return function (dispatch) {
    return axios
      .delete(`${envs.API_URL}/api/users/delete/${idUser}`, {
        data: {
          userID: idUser,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error,
        });
      });
  };
}
