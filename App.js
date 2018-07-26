import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Header, Icon } from 'react-native-elements'


class NavBar extends React.Component {
render() {
         return (
             <View style={styles.navContainer}>
                <View style={styles.navElements}>
                  <Icon name='newspaper-o' type='font-awesome' color='#9B9B9B' size={36}
                        onPress={() => navigate('News')} />
                </View>
                <View style={styles.navElements}>
                  <Icon name='heartbeat' type='font-awesome' color='#9B9B9B' size={36}
                        onPress={() => navigate('Home')} />
                </View>
                <View style={styles.navElements}>
                  <Icon name='calendar-o' type='font-awesome' color='#9B9B9B' size={36}
                        onPress={() => navigate('Schedule')} />
                </View>
                <View style={styles.navElements}>
                  <Icon name='group' type='font-awesome' color='#9B9B9B' size={36}
                        onPress={() => navigate('Team')} />
                </View>
              </View>
         )
 }
}


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appWrapper}>
     // MAIN VIEW
      <ScrollView>
	    <Button
		title="Go to News"
		onPress={() =>
		  navigate('News')
		}
	     />

      </ScrollView>
      //STICKY NAV BAR @ BOTTOM OF ALL SCREENS
     <NavBar />
     </View>

    );
  }
}

class NewsScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.appWrapper}>
     // MAIN VIEW
      <ScrollView>
	    <Button
		title="Go Back Home"
		onPress={() =>
		  navigate('Home')
		}
	     />

      </ScrollView>
      //STICKY NAV BAR @ BOTTOM OF ALL SCREENS
     <NavBar />
     </View>

    );
  }
}

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>I am your schedule</Text>
     <NavBar />
      </View>
    );
  }
}

class TeamScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>I am a Team</Text>
      </View>
    );
  }
}



// ALL THE DIFFERENT SCREENS DEFINED
const NavStack =createStackNavigator({
  Home: { screen: HomeScreen },
  News: { screen: NewsScreen },
  Schedule: { screen: ScheduleScreen },
  Team: { screen: TeamScreen },
  NavBar: { screen: NavBar },

});

export default NavStack;

// STYLING HERE
const styles = StyleSheet.create({
 appWrapper: {
    flex: 1
  },
  navContainer: {
    flex: 0.15,
    flexDirection: 'row'
  },
  navElements: {
    flex: 1,
    backgroundColor: '#F8F8F9',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
