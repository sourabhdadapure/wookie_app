import {Dispatch} from 'redux';
import types from './types';

export const getMovies = () => {
  return (dispatch: Dispatch) => {
    try {
      dispatch({type: types.GET_MOVIES_LOADING});
      dispatch({type: types.GET_MOVIES_SUCCESS, payload: []});
    } catch (error) {
      dispatch({type: types.GET_MOVIES_ERROR, error});
    }
  };
};
