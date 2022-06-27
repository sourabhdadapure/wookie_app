import * as React from "react";
import { View, Text, ScrollView } from "react-native";
import MovieCard from "../components/MovieCard";
import { MovieDetailsModel, MoviesModel } from "../modules/Movies";
import { connect } from "react-redux";
import { AirbnbRating } from "react-native-ratings";

interface MovieDetailsProperties {
  Movies: MoviesModel;
}

@(connect((state: MoviesModel) => state, {}) as any)
export default class MovieDetails extends React.Component<MovieDetailsProperties> {
  render() {
    const { Movies } = this.props;
    const activeMovieDetails = Movies.movieDetails[Movies.activeMovieId];
    const released_year = new Date(
      activeMovieDetails.released_on
    ).getFullYear();

    return (
      <ScrollView style={{ flex: 1, paddingTop: 100, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <MovieCard movie={activeMovieDetails} onMoviePosterPress={() => {}} />
          <View>
            <Text>{activeMovieDetails.title}</Text>
            <AirbnbRating
              ratingContainerStyle={{
                paddingTop: 20,
              }}
              count={10}
              showRating={false}
              size={15}
              defaultRating={activeMovieDetails.imdb_rating}
              isDisabled
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <Text>{released_year + " | "}</Text>
          <Text>{activeMovieDetails.length + " | "}</Text>
          <Text>{activeMovieDetails.director}</Text>
        </View>
        <Text>Cast: {activeMovieDetails.cast.join(", ")}</Text>
        <Text>Overview:{activeMovieDetails.overview}</Text>
      </ScrollView>
    );
  }
}
