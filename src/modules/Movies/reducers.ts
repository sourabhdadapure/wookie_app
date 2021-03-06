import types from "./types";

export class MovieModel {
  backkdrop: string = "";
  cast: string[] = [];
  classification: string = "";
  genres: string[] = [];
  id: string = "";
  imdb_rating: number = 0;
  length: string = "";
  overview: string = "";
  poster: string = "";
  released_on: string = "";
  slug: string = "";
  title: string = "";
}
export class MoviesModel {
  loading: boolean = false;
  movies: MovieModel[] = [];
  activeMovieId: string = "";
  searchedMovies: MovieModel[] = [];
  searchedTerm: string = "";
  groupedMovies: { [key: string]: MovieModel[] } = {};
  movieDetails: MovieDetailsModel = {
    "": {
      backdrop: "",
      cast: [],
      classification: "",
      genres: [],
      id: "",
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      released_on: "",
      director: "",
      slug: "",
      title: "",
    },
  };
  error: Error = {
    message: "",
    name: "",
  };
}

export type Moviegenres =
  | "Action"
  | "Comedy"
  | "Drama"
  | "Horror"
  | "Biography"
  | "Thriller"
  | "History"
  | "Adventure"
  | "Animation"
  | "Crime"
  | "Mystery"
  | "Fantasy"
  | "Family"
  | "Music"
  | "Romance"
  | "Sci-Fi"
  | "War"
  | "Western"
  | "Documentary"
  | "Short"
  | "TV Movie";

export type MovieDetailsModel = {
  [id: string]: {
    backdrop: string;
    cast: string[];
    classification: string;
    genres: string[];
    id: string;
    imdb_rating: number;
    length: string;
    overview: string;
    poster: string;
    released_on: string;
    slug: string;
    title: string;
    director: string;
  };
};

export const initialState: MoviesModel = {
  loading: false,
  activeMovieId: "",
  searchedTerm: "",
  groupedMovies: {},
  searchedMovies: [
    {
      id: "",
      backkdrop: "",
      cast: [],
      classification: "",
      genres: [],
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      released_on: "",
      slug: "",
      title: "",
    },
  ],
  movies: [
    {
      id: "",
      backkdrop: "",
      cast: [],
      classification: "",
      genres: [],
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      released_on: "",
      slug: "",
      title: "",
    },
  ],
  movieDetails: {
    "": {
      backdrop: "",
      cast: [],
      classification: "",
      genres: [],
      id: "",
      imdb_rating: 0,
      length: "",
      overview: "",
      poster: "",
      released_on: "",
      slug: "",
      title: "",
      director: "",
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

    case types.SEARCH_MOVIES_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.GROUP_MOVIES_BY_GENRE: {
      return {
        ...state,
        groupedMovies: action.payload,
      };
    }

    case types.SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        searchedMovies: action.payload,
      };
    }

    case types.SEARCH_TEXT_CHANGE: {
      return {
        ...state,
        searchedTerm: action.payload,
      };
    }
    case types.SEARCH_MOVIES_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
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
        activeMovieId: action.id,
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
