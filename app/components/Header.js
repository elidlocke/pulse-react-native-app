import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.headerTitle}>Pulse</Text>
      </View>
    );
  }
}

export default Header;
