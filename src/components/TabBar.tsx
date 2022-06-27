import * as React from "react";
import { View, Animated, TouchableOpacity } from "react-native";
import Icon, { IconTypes } from "./Icon";

export type TabBarType = "home" | "search";

interface TabBarProperties {
  icon: IconTypes;
  tab: TabBarType;
  onTabPress: () => void;
  active: TabBarType;
}

interface HomeTabProperties {
  onTabPress: () => void;
  position: "top" | "bottom";
}
export default class HomeTab extends React.Component<HomeTabProperties> {
  render() {
    const { onTabPress } = this.props;
    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          bottom: 0,
          padding: 20,
          backgroundColor: "#a7a7a7ff",
        }}>
        <TabBar
          icon="home"
          active={"home"}
          tab="home"
          onTabPress={onTabPress}
        />
        <TabBar
          icon="search"
          active={"search"}
          tab="search"
          onTabPress={onTabPress}
        />
      </View>
    );
  }
}

class TabBar extends React.Component<TabBarProperties> {
  state = {
    translateAnim: new Animated.Value(0),
  };

  render() {
    const translate = this.state.translateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0],
      extrapolate: "clamp",
    });
    const { active, tab, icon, onTabPress } = this.props;
    const isActive = active === tab;
    return (
      <TouchableOpacity
        style={{ opacity: isActive ? 1 : 0.65 }}
        onPress={onTabPress}>
        <Animated.View
          style={{
            transform: [{ translateY: translate }],
            width: 40,
            height: 40,
            margin: 2,
            marginBottom: 5,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
          }}>
          <Icon
            icon={icon}
            size={25}
            strokeColor={isActive ? "#fff" : "#000"}
            color={"red"}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}
