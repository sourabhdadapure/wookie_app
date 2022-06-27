import axios from "axios";
import { Dispatch } from "redux";
import { MovieModel } from "./reducers";
import types from "./types";
import { history } from "../../ViewStack";
import _ from "lodash";

export const getMovies = () => {
  return async (dispatch: Dispatch<any>) => {
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

      dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
      dispatch(groupMoviesByGenre(payload));
    } catch (error) {
      dispatch({ type: types.GET_MOVIES_ERROR, error });
    }
  };
};

export const groupMoviesByGenre = (movies: MovieModel[]) => {
  return (dispatch: Dispatch<any>) => {
    const GeneresObject: any = {};
    for (let movie of movies) {
      for (let genre of movie.genres) {
        if (!GeneresObject[genre]) {
          GeneresObject[genre] = [];
        } else {
          GeneresObject[genre].push(movie);
        }
      }
    }
    dispatch({ type: types.GROUP_MOVIES_BY_GENRE, payload: GeneresObject });
  };

  // console.warn("groupedMovies", count);
};

export const searchTextChange = (text: string) => {
  return {
    type: types.SEARCH_TEXT_CHANGE,
    payload: text,
  };
};

export const searchMovies = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.SEARCH_MOVIES_LOADING });
      console.warn("searchMovies::", query);

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
      console.warn("search ", data);

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
