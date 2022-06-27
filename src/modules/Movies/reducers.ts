import types from "./types";

export class MovieModel {
  backkdrop: string = "";
  cast: string[] = [];
  classification: string = "";
  generes: string[] = [];
  id: string = "";
  imdb_rating: number = 0;
  length: string = "";
  overview: string = "";
  poster: string = "";
  release_on: string = "";
  slug: string = "";
  title: string = "";
}
export class MoviesModel {
  loading: boolean = false;
  movies: MovieModel[] = [];
  movieDetails: MovieDetailsModel = {
    "": {
      backdrop: "",
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
  };
  error: Error = {
    message: "",
    name: "",
  };
}

export type MovieDetailsModel = {
  [id: string]: {
    backdrop: string;
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
  };
};

export const initialState: MoviesModel = {
  loading: false,
  movies: [
    {
      id: "",
      backkdrop: "",
      cast: [],
      classification: "",
      generes: [],
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      release_on: "",
      slug: "",
      title: "",
    },
  ],
  movieDetails: {
    "": {
      backdrop: "",
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
  },
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

    case types.GET_MOVIE_DETAILS_AND_NAVIGATE_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GET_MOVIE_DETAILS_AND_NAVIGATE_SUCCESS: {
      return {
        ...state,
        loading: false,
        movieDetails: {
          ...state.movieDetails,
          [action.id]: action.payload,
        },
      };
    }

    case types.GET_MOVIE_DETAILS_AND_NAVIGATE_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
