import {createStackNavigator,createAppContainer} from "react-navigation";
import LoginView from "./LoginView";
import HomeView from "../HomeView";

//导航栏样式设置
const options={
  headerStyle:{
    backgroundColor:"#478CF9",
    height:0
  },
  headerBackTitle:null,
  headerLeft:null
};
const LoginNavigator=createStackNavigator({
  LoginView: {
    screen: LoginView,
    navigationOptions:()=>{
      return options;
    }
  },
  HomeView:{
    screen:HomeView,
    navigationOptions:()=>{
      return options;
    }
  }
}, {
  initialRouteName: 'LoginView'
});

export default createAppContainer(LoginNavigator);