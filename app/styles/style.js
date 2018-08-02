import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  appWrapper: {
    flex: 1,
  },
  headerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#F7F7F7',
    borderBottomWidth: 0.5,
    borderColor: '#d6d7da',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontFamily: Platform.OS === 'ios' ? 'TrebuchetMS' : 'monospace',
    fontSize: 25,
    paddingTop: 25,
    color: 'tomato',
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardLogo: {
    width: 100,
    height: 100,
  },
  activityWrapper: {
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  activityIconContainer: {
    width: 30,
    marginRight: 15,
  },
  activityContainer: {
    maxWidth: 330,
  },
  newsDate: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    fontStyle: 'italic',
    fontSize: 10,
    color: 'gray',
  },
  newsDateNew: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    fontStyle: 'italic',
    fontSize: 10,
    color: 'tomato',
  },
  newsContent: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    fontSize: 16,
    color: 'gray',
  },
  newsContainer: {
    marginBottom: 100,
  },
  screenTitle: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 50,
    paddingRight: 20,
  },
  titleText: {
    fontFamily: Platform.OS === 'ios' ? 'TrebuchetMS' : 'monospace',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    color: 'gray',
  },
  infoText: {
    paddingTop: 10,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  calendarImg: {
    width: 300,
    height: 170,
  },
  calendarWrapper: {
    alignItems: 'center',
  },
  buttonStyle: {
    borderRadius: 5,
    backgroundColor: 'tomato',
  },
  buttonContainer: {
    paddingTop: 40,
  },
  inputsWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  feelingFace: {
    width: 120,
    height: 104,
  },
  dashConditionWrapper: {
    flexDirection: 'row',
  },
  dashFaceContainer: {
    padding: 20,
  },
  dashTitle: {
    paddingTop: 50,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    textAlign: 'left',
    fontSize: 18,
    color: 'gray',
  },
  dashCondition: {
    color: '#84D12D',
    fontSize: 20,
  },
  dashRisk: {
    color: '#84D12D',
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  dataField: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
  },
  activityCharts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fillChart: {
    width: 100,
    height: 100,
  },
  dataText: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    textAlign: 'center',
    color: 'gray',
  },
  dataTitle: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
    color: 'gray',
  },
  dashRiskWrapper: {
    flexDirection: 'row',
  },
  iconWrapper: {
    paddingRight: 10,
  },
  dashOverallRisk: {
    width: 150,
  },
  deltaChanges: {
    width: 150,
  },
  deltaChange: {
    flexDirection: 'row',
    paddingBottom: 20,
  },
  graphStyles: {
    height: 80,
    paddingBottom: 5,
  },
  newNotice: {
    color: 'tomato',
    fontWeight: 'bold',
  }
});
