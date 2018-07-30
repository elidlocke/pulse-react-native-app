import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header'
import styles from '../styles/style'
import awsConfig from '../../AppSync'
import { LineChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    let dataPromise = fetchData();
    dataPromise.then(function (data) {
    	console.log(data);
    });
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ];
    let mood = 'Above Average';
    let riskFactor = 21;
    let dailyChange = 5;
    let weeklyChange = 24;
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
	    <LineChart
                style={styles.graphStyles}
                data={ data }
                svg={{ stroke: 'tomato', strokeWidth: 3}}
                contentInset={{ top: 5, bottom: 5 }}
	    	showGrid={ false }
            >
                <Grid svg={{ stroke: '#EEEEEE', strokeWidth: 0.5}} />
            </LineChart>
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
	        <Text style={styles.dataText}>Regularity</Text>
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
		  { dailyChange }% improvement in overall health since last week
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
