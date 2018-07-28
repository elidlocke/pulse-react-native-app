import React from 'react';
import { Alert, View, Text, Image } from 'react-native';
import { Icon,
	 Button,
	 FormLabel,
	 FormInput,
	 FormValidationMessage
} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import { TextField } from 'react-native-material-textfield';

import Header from '../components/Header';
import styles from '../styles/style';

class TeamScreen extends React.Component {
  state = {
    phone: '',
  };
  render() {
    let data = [{
      value: 'Family',
    }, {
      value: 'Friend',
    }, {
      value: 'Neighbor',
    }];
    let { phone } = this.state;
    
    return (
      <View>
        <Header />
         <View style={styles.screenTitle}>
           <Icon name='user-plus' type='font-awesome' size={25} color='tomato'/>;
          <Text style={styles.titleText}>Assemble a Team</Text>
          <Text style={styles.infoText}>Add the people who care about George to recieve alerts. </Text>
          </View>
          <View style={styles.inputsWrapper}>
           <View>
	   <TextField
	        tintColor='tomato'
		label='Phone number'
		value={phone}
		onChangeText={ (phone) => this.setState({ phone }) }
	    />
	    <Dropdown
        	label='Relationship to George'
        	data={data}
      	    />
	   </View>
	  </View>
         <View style={styles.buttonContainer}>
        </View>
          <Button
            onPress={() => {
	      Alert.alert('Invitation Sent');
	      this.props.navigation.navigate('Home');
	    }}
            title="Invite to Care Circle"
            color='white'
            buttonStyle={styles.buttonStyle}
          />
      </View>
    );
  }
}

export default TeamScreen;
