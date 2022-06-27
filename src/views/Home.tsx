import * as React from "react";
import { View, Text } from "react-native";
import {
  getMovies,
  MovieModel,
  MoviesModel,
  getMovieDetailsAndNavigate,
} from "../modules/Movies";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
interface HomeProperties {
  getMovies(): void;
  Movies: MoviesModel;
  getMovieDetailsAndNavigate(movie: MovieModel): void;
}

@(connect((state: MovieModel) => state, {
  getMovies,
  getMovieDetailsAndNavigate,
}) as any)
export default class Home extends React.Component<HomeProperties> {
  componentDidMount() {
    const { getMovies, Movies } = this.props;
    getMovies();
  }
  render() {
    const { Movies, getMovieDetailsAndNavigate } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MovieList
          title="Movies"
          scrollViewType="horizontal"
          onMoviePosterPress={(val) => getMovieDetailsAndNavigate(val)}
          movies={Movies.movies}
        />
      </View>
    );
  }
}
