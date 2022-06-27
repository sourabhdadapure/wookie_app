/**
 * @format
 */
import * as React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import configureStore from "./src/config/configStore";
const store = configureStore();
import { Provider } from "react-redux";
import ViewStack from "./src/ViewStack";

const Root = () => (
  <Provider store={store}>
    <ViewStack />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
