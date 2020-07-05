import axios from "axios";
import envs from "../config";
import { types } from "../store/reducers";

//functions
//fetch a list of messages fromUser
export function fetchMessFromUser(fromUser) {
  return function (dispatch) {
    return axios
      .get(`${envs.API_URL}/api/fromMess/${fromUser}`)
      .then((response) => {
        console.log("sa", response.data);
      })
      .catch((error) => {
        dispatch({
          type: types.ERROR,
          payload: error,
        });
      });
  };
}
