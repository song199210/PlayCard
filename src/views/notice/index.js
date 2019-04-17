import { createStackNavigator, createAppContainer } from "react-navigation";
import NoticeView from "./NoticeView";

const NoticeNavigator = createStackNavigator({
  NoticeView: {
    screen: NoticeView
  }
}, {
  initialRouteName: 'NoticeView',
  headerBackTitleVisible:true
});

export default createAppContainer(NoticeNavigator);