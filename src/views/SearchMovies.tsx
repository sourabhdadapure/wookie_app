import * as React from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import {
  getMovies,
  MovieModel,
  MoviesModel,
  searchMovies,
} from "../modules/Movies";
import { connect } from "react-redux";
import _ from "lodash";
import MovieList from "../components/MovieList";

interface SearchMoviesProperties {
  searchMovies(query: string): void;
  Movies: MoviesModel;
}

@(connect((state: MoviesModel) => state, { searchMovies }) as any)
export default class SearchMovies extends React.Component<SearchMoviesProperties> {
  searchDebounced = _.debounce((e: string) => {
    const { searchMovies } = this.props;
    console.warn("searching for: " + e);
    searchMovies(e);
  }, 500);

  render() {
    const { searchMovies, Movies } = this.props;
    return (
      <View>
        <SearchBar
          onSearch={(val) => this.searchDebounced(val)}
          searchText={Movies.searchedTerm}
        />
        <MovieList movies={Movies.searchedMovies} />
      </View>
    );
  }
}
