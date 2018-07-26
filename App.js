import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import styles from './app/styles/style'

class Header extends React.Component {
     render () {
       return (
         <View style={styles.headerStyle}>
	 <Text style={styles.headerTitle}>Pulse</Text>
	 </View>
       );	
     }
}

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

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
      	<View style={styles.mainView}>
	  <Text>I am your schedule.</Text>
        </View>
      </View>
    );
  }
}

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



// ALL THE DIFFERENT SCREENS DEFINED
const RootStack =createBottomTabNavigator(
  {
  News: NewsScreen,
  Home: HomeScreen,
  Schedule: ScheduleScreen,
  Team: TeamScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
	let iconType;
        if (routeName === 'News') {
          iconName = 'newspaper-o';
	  iconType = 'font-awesome';
        } else if (routeName === 'Home') {
          iconName = 'heartbeat';
	  iconType = 'font-awesome';
        } else if (routeName === 'Schedule') {
          iconName = 'calendar-o';
	  iconType = 'font-awesome';
        } else if (routeName === 'Team') {
          iconName = 'group';
	  iconType = 'font-awesome';
        }
        return <Icon name={iconName} type={iconType} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
