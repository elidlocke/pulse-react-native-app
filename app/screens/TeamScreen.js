import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'
import styles from '../styles/style'

class TeamScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.mainView}>
          <Text>Your Team is Awesome.</Text>
        </View>
      </View>
    );
  }
}

export default TeamScreen;
