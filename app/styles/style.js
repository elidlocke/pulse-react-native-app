import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appWrapper: {
    flex: 1
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
    //fontFamily: 'TrebuchetMS',
    fontSize: 25,
    paddingTop: 25,
    color: 'tomato'
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardLogo: {
    width:100,
    height:100
  },
  activityWrapper: {
    borderTopWidth: 1,
    borderColor: '#D7D7D7',
    flexDirection: 'row',
    margin: 5,
    padding: 5,
  },
  activityIconContainer: {
    width: 20,
    marginRight: 10,
  },
  activityContainer: {
    maxWidth: 330,
  },
  newsDate: {
    fontFamily: 'Helvetica-Light',
    fontStyle: 'italic',
    fontSize: 10,
    color: 'gray',
  },
  newsDateNew: {
    fontFamily: 'Helvetica-Light',
    fontStyle: 'italic',
    fontSize: 10,
    color: 'tomato',
  },
  newsContent: {
    fontFamily: 'Helvetica-Light',
    fontSize: 16,
    color: 'gray',
  },
  screenTitle: {
    padding: 50,
  },
  titleText: {
    fontFamily: 'TrebuchetMS',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    color: 'gray',
  },
  infoText: {
    paddingTop: 10,
    fontFamily: 'Helvetica-Light',
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
  },
  calendarImg: {
    width: 300,
    height:180
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
    fontFamily: 'Helvetica-Light',
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
    fontFamily: 'Helvetica-Light',
    textAlign: 'center',
    color: 'gray',
  },
  dataTitle: {
    fontFamily: 'Helvetica-Light',
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
