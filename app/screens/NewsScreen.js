import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header'
import styles from '../styles/style'
import {activityFeed, activityItem } from '../globals/globals.js'

addActivity = function (activity) {
    return (
      <View style={styles.activityWrapper} key={activity.id}>
            <View style={styles.activityIconContainer}>
                <Icon name={activity.iconName} type={activity.iconType} size={25} color={activity.color}/>;
            </View>
            <View style = {styles.activityContainer}>
                <Text style={[activity.color == "tomato" ? styles.newsDateNew : styles.newsDate]}>{activity.date}</Text>
            	<Text style={styles.newNotice}>
            	    {activity.color == 'tomato'? <Text>NEW</Text>: null }
        	</Text>   

	    	<Text style={styles.newsContent}>{activity.details}</Text>
            </View>
  </View>	
    )
}

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newsfeed: activityFeed.map(addActivity), firstLoad: true };
    }
    addArticle() {
	
	if (this.state.firstLoad == true)
	{
	    let activity = addActivity(activityItem);
	    this.setState(prevState => ({
		newsfeed: [ addActivity(activityItem), ...activityFeed.map(addActivity)],
		firstLoad: false,
            }));
	}
    }
    componentDidMount() {
	this.state.newsfeed = 
        this.interval = setInterval(() => this.addArticle(), 1500);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
	    <View>
	        <View> {this.state.newsfeed} </View>
            </View>
        )
    }
}

class NewsScreen extends React.Component {
  render() {
    return (
      <View>
	<Header />
	<ScrollView>
	 <View style={styles.screenTitle}>
	   <Icon name='newspaper-o' type='font-awesome' size={25} color='tomato'/>;   
          <Text style={styles.titleText}>Activity Log</Text>
	 </View>
         <NewsFeed />
	</ScrollView>
      </View>
    );
  }
}

export default NewsScreen;
