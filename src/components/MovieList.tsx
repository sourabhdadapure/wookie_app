import * as React from "react";
import { View, FlatList } from "react-native";
import { MovieModel } from "../modules/Movies";
import MovieCard from "./MovieCard";

interface MovieListProperties {
  movies: MovieModel[];
  scrollViewType: "horizontal" | "vertical";
}

export default class MovieList extends React.Component<MovieListProperties> {
  render() {
    const { movies, scrollViewType } = this.props;
    return (
      <View>
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return <MovieCard movie={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          horizontal={scrollViewType === "horizontal"}
        />
      </View>
    );
  }
}
