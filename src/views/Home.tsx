import * as React from "react";
import { View, Text } from "react-native";
import { getMovies, MovieModel } from "../modules/Movies";
import { connect } from "react-redux";
interface HomeProperties {
  getMovies(): void;
  Movies: MovieModel;
}

@(connect((state: MovieModel) => state, { getMovies }) as any)
export default class Home extends React.Component<HomeProperties> {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    );
  }
}
