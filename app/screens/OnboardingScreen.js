import React from 'react';
import { Alert, View, Text, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import styles from '../styles/style';

class OnboardingScreen extends React.Component {
  showApp()
  {
    this.props.showApp();
  }

  render() {
    return (
      <View>
        <View style={styles.screenTitle}>
        <View style={styles.logoContainer}>
	    <Image
	    source={require('../../assets/images/HeartBeat.png')}
	    style={styles.onboardLogo}
		/>
	</View>
	  <Text style={styles.titleText}>Welcome to Pulse.</Text>
          <Text style={styles.infoText}>
            We're here to help you monitor the heart health of the people you care about. 
	    </Text>
        </View>
        <View style={styles.buttonContainer} />
        <Button
          onPress={() => {
	      Alert.alert('Fitbit Connected')
              this.showApp();
          }}
          title="Sync Outpatient's Fitbit"
          color="white"
          buttonStyle={styles.buttonStyle}
        />
      </View>
    );
  }
}

export default OnboardingScreen;
