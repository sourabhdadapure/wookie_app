import types from "./types";

export class MovieModel {
  loading: boolean = false;
  movies: {
    backkdrop: string;
    cast: string[];
    classification: string;
    generes: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    release_on: string;
    slug: string;
    title: string;
  }[] = [];
  error: Error = {
    message: "",
    name: "",
  };
}

export const initialState: MovieModel = {
  loading: false,
  movies: [
    {
      backkdrop: "",
      cast: [],
      classification: "",
      generes: [],
      id: "",
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      release_on: "",
      slug: "",
      title: "",
    },
  ],
  error: {
    name: "",
    message: "",
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
