import axios from "axios";
import envs from "../config";
import { store } from "../store/store";
import { types } from "../store/reducers";

//functions
//fetch a list of messages fromUser
export function fetchMessFromUserToUser(toUser, fromUser) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .get(`${envs.API_URL}/api/converWith`, {
        headers: {
          to: toUser,
          from: fromUser,
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch({
          type: types.FROMUSERTOUSER,
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

//insert a message in the database from the API
export function insertMsg(toUser, fromUser, body) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .post(
        `${envs.API_URL}/api/mess/add`,
        {
          toUser: toUser,
          fromUser: fromUser,
          body: body,
          date: new Date().toLocaleString(),
          read: false,
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
          payload: error.response.data,
        });
      });
  };
}

//update status message
export function updateStatusMsg(idMess) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .put(`${envs.API_URL}/api/mess/readStatus/${idMess}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return Promise.resolve(response.data.message);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error.response.data,
        });
      });
  };
}

//delete a message in the database from the API
export function deleteMsg(idMess) {
  const state = store.getState();
  const token = "Bearer " + state.apiToken;
  return function (dispatch) {
    return axios
      .delete(`${envs.API_URL}/api/delete/${idMess}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return Promise.resolve(response.data.message);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error.response.data,
        });
      });
  };
}
