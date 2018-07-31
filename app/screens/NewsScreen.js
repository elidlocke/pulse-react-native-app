import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header'
import styles from '../styles/style'

const activityFeed = [ {type:"Fatigue",
			date:"Jan 28 1990",
			details:"Dad had an event where something happened",
			id:"001",
			iconName: "newspaper-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Sleep",
			date:"June 28 1990",
			details:"Dad had another event where something happened",
			id:"002",
			iconName: "bathtub",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Fatigue",
			date:"June 29 1990",
			details:"Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"003",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"004",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"005",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"006",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"007",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"008",
			iconName: "newspaper-o",
			iconType: "font-awesome",
			color: "gray"},
			{type:"Health",
			date:"June 50 1990",
			details:"Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.",
			id:"009",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "gray"},
		     ];

activityItem = {type:"Health",
                        date:"June 50 1990",
                        details:"YO I AM AN ITEM. I AM THE NEWS NEWS IN THE HOUSE, HOLLA!!",
                        id:"010",
			iconName: "moon-o",
			iconType: "font-awesome",
			color: "tomato"};


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
