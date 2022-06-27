import * as React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import {
  getMovies,
  MovieModel,
  MoviesModel,
  searchMovies,
  searchTextChange,
  getMovieDetailsAndNavigate,
} from "../modules/Movies";
import { connect } from "react-redux";
import _ from "lodash";
import MovieList from "../components/MovieList";

interface SearchMoviesProperties {
  searchMovies(query: string): void;
  Movies: MoviesModel;
  searchTextChange(query: string): void;
  getMovieDetailsAndNavigate(movie: MovieModel): void;
}

@(connect((state: MoviesModel) => state, {
  searchMovies,
  searchTextChange,
  getMovieDetailsAndNavigate,
}) as any)
export default class SearchMovies extends React.Component<SearchMoviesProperties> {
  searchDebounced = _.debounce((e: string) => {
    const { searchMovies } = this.props;
    console.warn("searching for: " + e);
    searchMovies(e);
  }, 500);

  render() {
    const {
      searchMovies,
      Movies,
      searchTextChange,
      getMovieDetailsAndNavigate,
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <SearchBar
          onSearch={(val) => {
            searchTextChange(val);
            this.searchDebounced(val);
          }}
          searchText={Movies.searchedTerm}
        />
        <MovieList
          title="Searched Movies"
          onMoviePosterPress={(val) => getMovieDetailsAndNavigate(val)}
          scrollViewType="horizontal"
          movies={Movies.searchedMovies}
        />
      </View>
    );
  }
}
