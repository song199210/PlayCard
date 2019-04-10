import React,{Component} from "react";
import {Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class OpenedView extends React.PureComponent {
  static navigationOptions = (props)=>{
      return {
          headerTitle:(<Text style={{ flex: 1,color:"#fff",fontSize:18,textAlign: 'center' }}>打卡记录</Text>),
          headerStyle:{
              backgroundColor:"#43b07d"
          },
          headerTitleStyle:{
              color:"#fff",
              textAlign:"center",
              justifyContent: 'center',
              textAlignVertical:"center",
              alignItems: 'center'
          },
          headerRightContainerStyle:{
              paddingRight:10
          }
      }
  };
  render(){
      return (
          <Text>我是打卡界面</Text>
      );
  }
}
export default OpenedView;