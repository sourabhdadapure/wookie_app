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
        style={{
          paddingHorizontal: 5,
        }}>
        <Image
          source={{ uri: movie.poster }}
          style={{ width: 150, height: 250 }}
        />
      </TouchableOpacity>
    );
  }
}
