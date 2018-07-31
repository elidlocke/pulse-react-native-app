import { Platform } from 'react-native';

const activityFeed = [
  {
    type: 'Fatigue',
    date: 'July 06 2018',
    details: 'Dad\'s heartbeat was abnormally high for 2 minutes',
    id: '001',
    iconName: 'heartbeat',
    iconType: 'font-awesome',
  },
  {
    type: 'Sleep',
    date: 'July 07 2018',
    details: 'Dad got less than 5 hours of sleep tonight',
    id: '002',
    iconName: 'bathtub',
    iconType: 'font-awesome',
  },
  {
    type: 'sleep',
    date: 'June 10 2018',
    details: 'Dad met his sleep goal last night!',
    id: '003',
    iconName: 'moon-o',
    iconType: 'font-awesome',
  },
  {
    type: 'Health',
    date: 'July 11 2018',
    details: 'Dad had experienced some abnormal heart beats at 8:52 am.',
    id: '004',
    iconName: 'heartbeat',
    iconType: 'font-awesome',
  },
  {
    type: 'Health',
    date: 'July 12 2018',
    details: 'Dad reduced his overall risk factor by 3% from yesterday!',
    id: '005',
    iconName: 'trending-down',
    iconType: 'feather',
  },
  {
    type: 'Health',
    date: 'July 13 2018',
    details: 'Day went for a 23 minute walk today. Remind him to keep it up!',
    id: '006',
    iconName: Platform.OS === 'ios' ? 'ios-walk' : 'directions-walk',
    iconType: Platform.OS === 'ios' ? 'ionicon' : 'material-icons',
  },
  {
    type: 'Health',
    date: 'July 16 2018',
    details:
      'Dad increased his overall risk factor by 2% from yesterday. Give him a call and see how he\'s feeling.',
    id: '007',
    iconName: 'trending-down',
    iconType: 'feather',
  },
  {
    type: 'Health',
    date: 'July 20 2018',
    details: 'Battery is low on Dad\'s fitbit.',
    id: '008',
    iconName: 'battery-1',
    iconType: 'font-awesome',
  },
];

const activityItem = {
  type: 'Health',
  date: 'June 50 1990',
  details: 'Dad didn\'t meet his daily step goal today.',
  id: '010',
  iconName: Platform.OS === 'ios' ? 'ios-walk' : 'directions-walk',
  iconType: Platform.OS === 'ios' ? 'ionicon' : 'material-icons',
};

export { activityFeed, activityItem };
