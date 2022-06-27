import axios from "axios";
import { Dispatch } from "redux";
import { MovieModel } from "./reducers";
import types from "./types";

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.GET_MOVIES_LOADING });

      const { data } = await axios.get("https://wookie.codesubmit.io/movies", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer Wookie2019",
        },
      });
      const payload = data.movies;
      console.warn("Movies", data);

      dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: types.GET_MOVIES_ERROR, error });
    }
  };
};
