import * as React from "react";
import { View, Text } from "react-native";
import { getMovies, MovieModel, MoviesModel } from "../modules/Movies";
import { connect } from "react-redux";
import MovieList from "../components/MovieList";
interface HomeProperties {
  getMovies(): void;
  Movies: MoviesModel;
}

@(connect((state: MovieModel) => state, { getMovies }) as any)
export default class Home extends React.Component<HomeProperties> {
  componentDidMount() {
    const { getMovies, Movies } = this.props;
    getMovies();
  }
  render() {
    const { Movies } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <MovieList
          title="Movies"
          scrollViewType="horizontal"
          movies={Movies.movies}
        />
      </View>
    );
  }
}
