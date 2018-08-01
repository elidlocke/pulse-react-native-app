import React from 'react';
import { Alert, View, Text, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import Header from '../components/Header';
import styles from '../styles/style';

class ScheduleScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <View style={styles.screenTitle}>
          <Icon
            name="calendar-o"
            type="font-awesome"
            size={25}
            color="tomato"
          />
          <Text style={styles.titleText}>Schedule</Text>
          <Text style={styles.infoText}>
            Ensure that someone will always be there to help by syncing your
            calendar.{' '}
          </Text>
        </View>
        <View style={styles.calendarWrapper}>
          <Image
            source={require('../../assets/images/Calendar.png')}
            style={styles.calendarImg}
          />
        </View>
        <View style={styles.buttonContainer} />
        <Button
          onPress={() => Alert.alert('Grant App Access to Google Calendar?')}
          title="Connect to Calendar"
          color="white"
          buttonStyle={styles.buttonStyle}
        />
      </View>
    );
  }
}

export default ScheduleScreen;
