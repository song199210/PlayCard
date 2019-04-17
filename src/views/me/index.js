import { createStackNavigator, createAppContainer } from "react-navigation";
import MeView from "./MeView";

const MeNavigator = createStackNavigator({
  MeView: {
    screen: MeView
  }
}, {
  initialRouteName: 'MeView',
});

export default createAppContainer(MeNavigator);