import axios from "axios";
import { Dispatch } from "redux";
import { MovieModel } from "./reducers";
import types from "./types";
import { history } from "../../ViewStack";

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
      console.warn("Movies::", data);

      dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
    } catch (error) {
      dispatch({ type: types.GET_MOVIES_ERROR, error });
    }
  };
};

export const serachTextChange = (text: string) => {
  return {
    type: types.SEARCH_TEXT_CHANGE,
    payload: text,
  };
};

export const searchMovies = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.SEARCH_MOVIES_LOADING });

      const { data } = await axios.get(
        `https://wookie.codesubmit.io/movies?q=${query}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer Wookie2019",
          },
        }
      );
      const payload = data.movies;
      console.warn("searceh ", payload);

      dispatch({
        type: types.SEARCH_MOVIES_SUCCESS,
        payload,
        searchedTerm: query,
      });
    } catch (error) {
      dispatch({ type: types.SEARCH_MOVIES_ERROR, error });
    }
  };
};

export const getMovieDetailsAndNavigate = (movie: MovieModel) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.GET_MOVIE_DETAILS_AND_NAVIGATE_LOADING });
      const movieId = movie.id;
      console.warn("Movies:", movie);
      if (movieId) {
        history.push("/movie/" + movieId);
        dispatch({
          type: types.GET_MOVIE_DETAILS_AND_NAVIGATE_SUCCESS,
          payload: movie,
          id: movieId,
        });
      }
    } catch (error) {
      dispatch({ type: types.GET_MOVIE_DETAILS_AND_NAVIGATE_ERROR, error });
    }
  };
};
