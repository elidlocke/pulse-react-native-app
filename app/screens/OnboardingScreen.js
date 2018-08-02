import React from "react";
import { View, Text, Image, Button } from "react-native";
import Header from "../components/Header";
import styles from "../styles/style";

class OnboardingScreen extends React.Component {
  showApp()
  {
    this.props.showApp();
  }

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
            title="Start"
            onPress={() => {
              this.showApp();
            }}
          />
        </View>
      </View>
    );
  }
}

export default OnboardingScreen;