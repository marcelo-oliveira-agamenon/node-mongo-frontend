import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

//functions
//fetch a list of users from API
export function fetchUserList() {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .get(`${envs.API_URL}/api/users`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch({
          type: types.USERLIST,
          payload: response.data,
        });
        console.log("data", response.data);
      })
      .catch((error) => {
        console.log("error", error);
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}

//add new user in the database from the API
export function addNewUser(name, email, password, phone) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .post(
        `${envs.API_URL}/api/users/add`,
        {
          name: name,
          email: email,
          phone: phone,
          password: password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
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

//update a user in the database from the API
export function updateUser(name, email, password, phone, idUser) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .put(
        `${envs.API_URL}/api/users/update/${idUser}`,
        {
          name: name,
          email: email,
          phone: phone,
          password: password,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
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

//delete a user in the database from the API
export function deleteUser(idUser) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .delete(`${envs.API_URL}/api/users/delete/${idUser}`, {
        headers: {
          Authorization: token,
        },
      })
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
