import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header'
import styles from '../styles/style'

class NewsScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.mainView}>
          <Text>I am BIG NEWS.</Text>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
