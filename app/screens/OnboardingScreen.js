import React from "react";
import { View, Text, Image, Button } from "react-native";
import Header from "../components/Header";
import styles from "../styles/style";
import { withNavigation } from "react-navigation";

class OnboardingScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.mainView}>
          <Image
            source={require('../../assets/images/HeartBeat.png')}
            style={styles.onboardLogo}
          />
	  <Text>
	    Welcome to Pulse
	  </Text>
          <Text>
            Some placeholder text that tells you all about what this app does.
            Watch out, someone might read it.
          </Text>
          <Button
            style={styles.buttonStyle}
            title="Back"
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(OnboardingScreen);
