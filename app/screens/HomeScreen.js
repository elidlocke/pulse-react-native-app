import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'
import styles from '../styles/style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    return (
      <View>
        <Header />
        <View style={styles.mainView}>
          <Text>I am your pulse.</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
