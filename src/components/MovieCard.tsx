import * as React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { MovieModel } from "../modules/Movies";

interface MovieCardProperties {
  movie: MovieModel;
  onMoviePosterPress?(): void;
}

export default class MovieCard extends React.Component<MovieCardProperties> {
  render() {
    const { movie, onMoviePosterPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onMoviePosterPress}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={{ uri: movie.poster }}
          style={{ width: 100, height: 200 }}
        />
      </TouchableOpacity>
    );
  }
}
