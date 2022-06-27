import types from './types';

export class MovieModel {
  loading: boolean = false;
  movies: [] = [];
  error: Error = {
    message: '',
    name: '',
  };
}

export const initialState: MovieModel = {
  loading: false,
  movies: [],
  error: {
    name: '',
    message: '',
  },
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.GET_MOVIES_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case types.GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
