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
  render() {
    const { containerStyle, onSearch, searchText } = this.props;
    return (
      <View
        style={[
          containerStyle,
          {
            flexDirection: "row",
            height: 40,
            alignItems: "center",
            alignSelf: "center",
          },
        ]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(val) => onSearch(val)}
          value={searchText}
          onSubmitEditing={() => onSearch(searchText)}
          returnKeyType="search"
          placeholder="Search movies"
          autoFocus={true}
        />
      </View>
    );
  }
}
