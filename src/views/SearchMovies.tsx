import * as React from "react";
import { View, Text } from "react-native";
import {
  getMovies,
  MovieModel,
  MoviesModel,
  searchMovies,
} from "../modules/Movies";

interface SearchMoviesProperties {
  searchMovies(query: string): void;
  Movies: MoviesModel;
}

export default class SearchMovies<SearchMoviesProperties> {
  render() {
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
