import * as React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
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
    const groupedMovies = Object.keys(Movies.groupedMovies);
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingTop: 50 }}>
        {groupedMovies.map((key) => {
          return (
            <MovieList
              title={key}
              scrollViewType="horizontal"
              onMoviePosterPress={(val) => getMovieDetailsAndNavigate(val)}
              movies={Movies.groupedMovies[key]}
            />
          );
        })}
      </ScrollView>
    );
  }
}
