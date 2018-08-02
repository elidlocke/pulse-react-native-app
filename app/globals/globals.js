import { Platform } from "react-native";

const activityFeed = [
  {
    type: "Fatigue",
    date: "Fri Jul 06 2018",
    details: "Dad's heartbeat was abnormally high for 2 minutes at 12:51 pm",
    id: "001",
    iconName: "heartbeat",
    iconType: "font-awesome",
    color: "gray"
  },
  {
    type: "Sleep",
    date: "Sat Jul 07 2018",
    details: "Dad got less than 5 hours of sleep tonight",
    id: "002",
    iconName: "moon-o",
    iconType: "font-awesome",
    color: "gray"
  },
  {
    type: "sleep",
    date: "Tue Jul 10 2018",
    details: "Dad met his sleep goal last night!",
    id: "003",
    iconName: "bed",
    iconType: "font-awesome",
    color: "gray"
  },
  {
    type: "Health",
    date: "Thu Jul 12 2018",
    details: "Dad reduced his overall risk factor by 3% from yesterday!",
    id: "005",
    iconName: "trending-down",
    iconType: "feather",
    color: "gray"
  },
  {
    type: "Health",
    date: "Fri Jul 13 2018",
    details: "Dad went for a 23 minute walk today. Remind him to keep it up!",
    id: "006",
    iconName: Platform.OS === "ios" ? "ios-walk" : "directions-walk",
    iconType: Platform.OS === "ios" ? "ionicon" : "material-icons",
    color: "gray"
  },
  {
    type: "Health",
    date: "Mon Jul 16 2018",
    details:
      "Dad increased his overall risk factor by 2% from yesterday. Give him a call and see how he's feeling.",
    id: "007",
    iconName: "trending-down",
    iconType: "feather",
    color: "gray"
  },
  {
    type: "Health",
    date: "Fri Jul 20 2018",
    details: "Battery is low on Dad's fitbit.",
    id: "008",
    iconName: "battery-1",
    iconType: "font-awesome",
    color: "gray"
  }
];

const activityItem = {
  type: "Health",
  date: new Date().toDateString(),
  details: "Dad didn't get enough exercise yesterday.",
  id: "010",
  iconName: Platform.OS === "ios" ? "ios-walk" : "directions-walk",
  iconType: Platform.OS === "ios" ? "ionicon" : "material-icons",
  color: "tomato"
};

export { activityFeed, activityItem };
