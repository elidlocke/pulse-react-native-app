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

function sortFunction(a, b) {
  return a.time - b.time;
}

async function fetchData(token) {
  const ListHeartRate = `query listHeartRate
	{
	  listHeartRates(limit:600 ${token ? `, nextToken: "${token}"` : ``})
	  {
	    items
	    {
		  time
		  bpm
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
    this.state = { data: [], cache: [], nextToken: '' };
    this.update();
  }

  componentDidMount() {
    // TODO: Find better way to trigger events every X min
    //this.interval = setInterval(() => this.update(), 600000);
    this.timeInterval = setInterval(() => this.updateSeconds(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  update() {
    const dataPromise = fetchData(this.state.nextToken);
    dataPromise
      .then(r => {
        const bpms = r.data.listHeartRates.items
          .sort(sortFunction)
          .map(k => k.bpm);
        this.setState(prevState => {
          return {
            data:
              prevState.data.length > 0 ? prevState.data : bpms.slice(0, 59),
            cache: prevState.data.length > 0 ? bpms : bpms.slice(60),
            nextToken: r.data.listHeartRates.nextToken
          };
        });
      })
      .catch(e => {
        console.error(e);
      });
  }

  updateSeconds() {
    const data = this.state.data.slice(1);
    data.push(this.state.cache.shift());
    this.setState(prevState => {
      return {
        data: data,
        cache: prevState.cache,
        nextToken: prevState.nextToken
      };
    });
  }

  render() {
    return (
      <View>
        <Text style={styles.heartNumber}>BPM: {this.state.data[this.state.data.length - 1]}</Text>
        <LineChart
          style={styles.graphStyles}
          data={this.state.data}
          svg={{ stroke: 'tomato', strokeWidth: 3 }}
          showGrid={false}
	  yMax={100}
	  yMin={40}
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
