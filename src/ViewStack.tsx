import * as React from "react";
import { View } from "react-native";
import { Home, MovieDetails } from "./views";
import { Router, Route, Switch } from "react-router-native";
import { createMemoryHistory } from "history";
import HomeTab from "./components/TabBar";

export const history = createMemoryHistory();

export default class ViewStack extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
        <HomeTab onTabPress={() => {}} position="bottom" />
      </Router>
    );
  }
}
