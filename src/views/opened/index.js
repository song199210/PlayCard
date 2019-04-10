import { createStackNavigator, createAppContainer } from "react-navigation";
import OpenedView from "./OpenedView";

const OpenedNavigator = createStackNavigator({
  OpenedView: {
    screen: OpenedView
  }
}, {
  initialRouteName: 'OpenedView',
});

export default createAppContainer(OpenedNavigator);