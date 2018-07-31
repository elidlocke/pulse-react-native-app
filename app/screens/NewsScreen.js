import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header';
import styles from '../styles/style';

const activityFeed = [
  {
    type: 'Fatigue',
    date: 'Jan 28 1990',
    details: 'Dad had an event where something happened',
    id: '001'
  },
  {
    type: 'Sleep',
    date: 'June 28 1990',
    details: 'Dad had another event where something happened',
    id: '002'
  },
  {
    type: 'Fatigue',
    date: 'June 29 1990',
    details:
      'Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '003'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '004'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '005'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '006'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '007'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '008'
  },
  {
    type: 'Health',
    date: 'June 50 1990',
    details:
      'Ok now we are doing great. Dad had another event where something happened and this text is very long. Blah blah this is some real long text.',
    id: '009'
  }
];

const activityItems = activityFeed.map(activity => (
  <View style={styles.activityWrapper} key={activity.id}>
    <View style={styles.activityIconContainer}>
      <Icon
        name="thermometer-half"
        type="font-awesome"
        size={25}
        color="gray"
      />
    </View>
    <View style={styles.activityContainer}>
	    <Text style={styles.newsDate}>
		    {activity.date}
	    </Text>
	    <Text style={styles.newsContent}>
		    {activity.details}
	    </Text>
    </View>
  </View>
));

class NewsScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <ScrollView>
          <View style={styles.screenTitle}>
            <Icon
              name="newspaper-o"
              type="font-awesome"
              size={25}
              color="tomato"
            />
	    <Text style={styles.titleText}>Activity Log</Text>
          </View>
          {activityItems}
        </ScrollView>
      </View>
    );
  }
}

export default NewsScreen;
