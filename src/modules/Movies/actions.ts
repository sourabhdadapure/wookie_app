import { Axios } from "axios";
import { Dispatch } from "redux";
import { MovieModel } from "./reducers";
import types from "./types";

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.GET_MOVIES_LOADING });

      const data: Partial<MovieModel> = await fetch(
        "https://wookie.codesubmit.io/movies",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer Wookie2019",
          },
        }
      );
      console.warn("Data", data);
      const payload = data.movies;

      dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: types.GET_MOVIES_ERROR, error });
    }
  };
};
