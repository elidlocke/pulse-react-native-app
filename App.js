import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Header, Icon } from 'react-native-elements'
import styles from './app/styles/style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>I am your pulse.</Text>
      </View>
    );
  }
}

class NewsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>I am BIG NEWS</Text>
      </View>
    );
  }
}

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>I am your schedule</Text>
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
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
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
