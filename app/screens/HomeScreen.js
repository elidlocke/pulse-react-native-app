import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header'
import styles from '../styles/style'
import awsConfig from '../../AppSync'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import TimerMixin from 'react-timer-mixin';
import { SharedElement } from 'react-native-motion';


// TESTING USING THE AMPLIFY STUFF
import Amplify from 'aws-amplify';
import API, { graphqlOperation } from "@aws-amplify/api";

Amplify.configure(awsConfig);

async function fetchData() {
	const ListHeartRate = `query listHeartRate {
	  listHeartRates(limit:5) {
	    items {
		  bpm
	    }
	  }
	}`;

	const allHeartRates = await API.graphql(graphqlOperation(ListHeartRate));
	return (allHeartRates);
}

class HeartChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }
    update() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1,
        }));
    }
    componentDidMount() {
        console.log('COMPONENTDIDMOUNT')
        this.interval = setInterval(() => this.update(), 1000);
	var timer = setInterval(() => {
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
	let data = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
        let dataPromise = fetchData();
        dataPromise.then(function (data) {
    	    console.log(data);
	}, function (error){
	    console.error('oops');
        });
	
        return (
	   <View>
		<Text>{this.state.data}</Text>
	   <LineChart
                style={styles.graphStyles}
                data={ data }
                svg={{ stroke: 'tomato', strokeWidth: 3}}
                contentInset={{ top: 5, bottom: 5 }}
	    	showGrid={ false }
	    	animate={ false }
	    	animationDuration={ 300 }
            >
                <Grid svg={{ stroke: '#EEEEEE', strokeWidth: 0.5}} />
            </LineChart>
	    </View>
        )
    }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    let mood = 'Above Average';
    let riskFactor = 11;
    let dailyChange = 4;
    let weeklyChange = 2;
    let conditionColor = '';
    return (
      <View>
        <Header />
	    <View style={styles.dashConditionWrapper}>
            <View style={styles.dashFaceContainer}>
              <Image
	       source={require('../../assets/images/Face_03.png')}
	       style={styles.feelingFace}
	     />;
	    </View>
            <View style={styles.homeMood}>
              <View style = {styles.activityContainer}>
                <Text style={styles.dashTitle}>Current Condition: </Text>
                <Text style={styles.dashCondition}>{mood.toUpperCase()}</Text>
              </View>
	    </View>
         </View>
         <View style={styles.dataField}>
	    <HeartChart />
	 </View>
         <View style={styles.dataField}>
            <View style={styles.activityCharts}>
	      <View>
	        <Text style={styles.dataText}>Activity</Text>
	        <Image
	         source={require('../../assets/images/Fill_04.png')}
	         style={styles.fillChart}
	       />;
	      </View>
	      <View>
	        <Text style={styles.dataText}>Heart Health</Text>
	        <Image
	         source={require('../../assets/images/Fill_01.png')}
	         style={styles.fillChart}
	       />;
	      </View>
	      <View>
	        <Text style={styles.dataText}>Sleep</Text>
	        <Image
	         source={require('../../assets/images/Fill_02.png')}
	         style={styles.fillChart}
	       />;
	      </View>
	    </View>
	 </View>
         <View style={styles.dataField}>
	   <View style={styles.dashRiskWrapper}>
	     <View style={styles.dashOverallRisk}>
	       <Text style={styles.dataTitle}> Overall Risk Factor.</Text>
               <Text style={styles.dashRisk}>{riskFactor}%</Text>
	     </View>
	     <View style={styles.deltaChanges}>
	       <View style={styles.deltaChange}>
		  <View style={styles.iconWrapper}>
	           <Icon name='arrow-up' type='font-awesome' size={30} color='#C8C7C7'/>;
	  	  </View>
	         <Text style={styles.dataTitle}>	  
		  { dailyChange }% improvement in overall health since yesterday
	         </Text>
	      </View>
	       <View style={styles.deltaChange}>
		  <View style={styles.iconWrapper}>
	           <Icon name='arrow-down' type='font-awesome' size={30} color='#C8C7C7'/>;
	  	  </View>
	       <Text style={styles.dataTitle}>	  
		  { weeklyChange }% decrease in overall health since last week
	       </Text>
	    </View>
	   </View>
	   </View>
	 </View>
      </View>
    );
  }
}

export default HomeScreen;
