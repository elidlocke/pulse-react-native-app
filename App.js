import React from 'react';
import { AppRegistry, StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from "react-navigation";
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import styles from './app/styles/style'
import Header from './app/components/Header'
import HomeScreen from './app/screens/HomeScreen'
import NewsScreen from './app/screens/NewsScreen'
import ScheduleScreen from './app/screens/ScheduleScreen'
import TeamScreen from './app/screens/TeamScreen'

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
