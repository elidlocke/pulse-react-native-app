import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../components/Header'
import styles from '../styles/style'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Pulse',
  };
  render() {
    let mood = 'Above Average'
    let riskFactor = 21
    let conditionColor = ''
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
	   <Text style={styles.dataText}>
	    Insert some activity data here. I am supposed to be a heart beat, so I take up some amount of room. I am not just a boring static app. I actually do things, I swear. See my heart beat here. Yes, that is my heart beating. 
	   </Text>
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
	       <View>
	           <Icon name='arrow-up' type='font-awesome' size={30} color='gray'/>;
	         <Text>	  
	          24% Better since last week
	         </Text>
	      </View>
	       <View>
	         <Icon name='arrow-up' type='font-awesome' size={30} color='gray'/>;
	       <Text>	  
	        24% Better since last week
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
