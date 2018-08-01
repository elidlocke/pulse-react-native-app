import Amplify from 'aws-amplify';
import API, { graphqlOperation } from '@aws-amplify/api';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { LineChart, Grid } from 'react-native-svg-charts';
import Header from '../components/Header';
import styles from '../styles/style';
import awsConfig from '../../AppSync';

Amplify.configure(awsConfig);

async function fetchData() {
  const ListHeartRate = `query listHeartRate {
	  listHeartRates(limit:5) {
	    items {
		  bpm
		  time
	    }
	    nextToken
	  }
	}`;

  const allHeartRates = await API.graphql(graphqlOperation(ListHeartRate));
  return allHeartRates;
}

class HeartChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  render() {
    const data = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 40)
    );
    // const dataPromise = fetchData();
    // dataPromise.then(
    //   function(data) {
    //     console.log(data);
    //   },
    //   function(error) {
    //     console.error("oops");
    //   }
    // );

    return (
      <View>
        <Text>{this.state.data}</Text>
        <LineChart
          style={styles.graphStyles}
          data={data}
          svg={{ stroke: 'tomato', strokeWidth: 3 }}
          showGrid={false}
        >
          <Grid svg={{ stroke: '#EEEEEE', strokeWidth: 0.5 }} />
        </LineChart>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    const mood = 'Above Average';
    const riskFactor = 11;
    const dailyChange = 4;
    const weeklyChange = 2;
    return (
      <View>
        <Header />
        <View style={styles.dashConditionWrapper}>
          <View style={styles.dashFaceContainer}>
            <Image
              source={require('../../assets/images/Face_03.png')}
              style={styles.feelingFace}
            />
          </View>
          <View style={styles.homeMood}>
            <View style={styles.activityContainer}>
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
              />
            </View>
            <View>
              <Text style={styles.dataText}>Heart Health</Text>
              <Image
                source={require('../../assets/images/Fill_01.png')}
                style={styles.fillChart}
              />
            </View>
            <View>
              <Text style={styles.dataText}>Sleep</Text>
              <Image
                source={require('../../assets/images/Fill_02.png')}
                style={styles.fillChart}
              />
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
                  <Icon
                    name="arrow-up"
                    type="font-awesome"
                    size={30}
                    color="#C8C7C7"
                  />
                </View>
                <Text style={styles.dataTitle}>
                  {dailyChange}% improvement in overall health since yesterday
                </Text>
              </View>
              <View style={styles.deltaChange}>
                <View style={styles.iconWrapper}>
                  <Icon
                    name="arrow-down"
                    type="font-awesome"
                    size={30}
                    color="#C8C7C7"
                  />
                </View>
                <Text style={styles.dataTitle}>
                  {weeklyChange}% decrease in overall health since last week
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
