import * as React from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

interface SearchBarProperties {
  onSearch: (query: string) => void;
  searchText: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default class SearchBar extends React.Component<SearchBarProperties> {
  state = {
    search: "",
  };
  render() {
    const { search } = this.state;
    const { containerStyle, onSearch, searchText } = this.props;
    return (
      <View
        style={[
          containerStyle,
          {
            flexDirection: "row",
            marginTop: 100,
            height: 40,
            width: "90%",
            alignItems: "center",
            alignSelf: "center",
            borderWidth: 1,
          },
        ]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(val) => {
            onSearch(val);
          }}
          value={searchText}
          returnKeyType="search"
          placeholder="Search movies"
          autoFocus={true}
        />
      </View>
    );
  }
}
