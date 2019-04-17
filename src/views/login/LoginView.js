import React,{Component} from "react";
import {View,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,Input,Text } from 'react-native-elements';

class LoginView extends Component {
  goHome=()=>{
    this.props.navigation.navigate("HomeView");
  }
  render(){
    return (
      <View style={styles.loginBox}>
        <View style={styles.loginCon}>
          <Text h4>欢迎登录</Text>
          <View style={{marginBottom:10,marginTop:10}}>
            <Input
              placeholder='请输入用户名'
              containerStyle={styles.containerStyle}
              leftIconContainerStyle={styles.leftIconStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={
                <Icon
                  name='user'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='请输入密码'
              containerStyle={styles.containerStyle}
              leftIconContainerStyle={styles.leftIconStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
            />
          </View>
          <Button onPress={()=>{this.goHome()}} title="登录"></Button>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  loginBox:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#478CF9"
  },
  loginCon:{
    marginLeft:20,
    marginRight:20,
    padding:20,
    paddingBottom:30,
    backgroundColor:"rgba(255,255,255,.9)",
  },
  containerStyle:{
    marginTop:6,
    marginBottom:6,
    padding:0
  },
  leftIconStyle:{
    borderWidth:0
  },
  inputContainerStyle:{
    height:42,
    padding:0,
    margin:0,
    borderWidth:0,
    borderWidth:1,
    borderColor:"#ccc"
  },
  inputStyle:{
    fontSize:14
  }
});
export default LoginView;
