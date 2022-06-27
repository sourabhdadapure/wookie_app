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

export default class SearchMovies extends React.Component<SearchMoviesProperties> {
  render() {
    const { searchMovies, Movies } = this.props;
    return (
      <View>
        <Text>Search</Text>
      </View>
    );
  }
}
