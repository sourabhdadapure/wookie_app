import * as React from "react";
import { View, FlatList, Text } from "react-native";
import { MovieModel } from "../modules/Movies";
import MovieCard from "./MovieCard";

interface MovieListProperties {
  movies: MovieModel[];
  scrollViewType: "horizontal" | "vertical";
  title: string;
  onMoviePosterPress(movie: MovieModel): void;
}

export default class MovieList extends React.Component<MovieListProperties> {
  render() {
    const { movies, scrollViewType, title, onMoviePosterPress } = this.props;
    return (
      <View style={{ flex: 1, paddingTop: 100, paddingLeft: 10 }}>
        <Text style={{ paddingVertical: 10 }}>{title}</Text>
        <FlatList
          data={movies}
          renderItem={({ item }) => {
            return (
              <MovieCard
                onMoviePosterPress={() => onMoviePosterPress(item)}
                movie={item}
              />
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          horizontal={scrollViewType === "horizontal"}
        />
      </View>
    );
  }
}
