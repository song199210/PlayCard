import React,{Component} from "react";
import {Animated,View,StyleSheet,Modal,Image,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,Input,Text,Overlay,CheckBox } from 'react-native-elements';
import ReginCom from "./components/reginCom";
import UpdateCom from "./components/updateCom";

class LoginView extends Component {
  state={
    isVisible1:false,
    isVisible2:false,
    fadeInOpacity:new Animated.Value(0)
  }
  componentDidMount() {
  }
  goHome=()=>{
    this.props.navigation.navigate("HomeView");
  }
  vHandle1=()=>{
    this.setState({
      isVisible1:true
    });
  }
  vHandle2=()=>{
    this.setState({
      isVisible2:true
    });
  }
  closeModal1=()=>{
    this.setState({
      isVisible1:false
    });
  }
  closeModal2=()=>{
    this.setState({
      isVisible2:false
    });
  }
  render(){
    return (
      <View style={styles.loginBox}>
        <Image style={styles.headerImg} source={require("../../images/headerImg.jpg")}/>
        <View style={styles.loginCon}>
          <View style={{marginBottom:10}}>
            <Input
              placeholder='请输入用户名'
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={
                <Icon
                  name='user'
                  size={20}
                  color='#999'
                />
              }
            />
            <Input
              placeholder='请输入密码'
              containerStyle={styles.containerStyle}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='#999'
                />
              }
            />
          </View>
          <Button onPress={()=>{this.goHome()}} buttonStyle={{marginLeft:10,marginRight:10}} title="登录"></Button>
          <View style={{flexDirection:"row",padding:10}}>
            <Text style={{...styles.tStyle,textAlign:"left"}} onPress={this.vHandle1}>立即注册</Text>
            <Text style={{...styles.tStyle,textAlign:"right"}} onPress={this.vHandle2}>忘记密码</Text>
          </View>
        </View>
        <ReginCom modalVisible={this.state.isVisible1} closeEvent={this.closeModal1}/>
        <UpdateCom modalVisible={this.state.isVisible2} closeEvent={this.closeModal2}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  loginBox:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#f6f3f7"
  },
  loginCon:{
    width:Dimensions.get("window").width,
    marginLeft:20,
    marginRight:20,
    padding:20
  },
  headerImg:{
    width:80,
    height:80,
    marginTop:80,
    marginBottom:6,
    borderRadius:80,
    borderWidth:1
  },
  containerStyle:{
    marginTop:6,
    marginBottom:6,
    padding:0
  },
  inputContainerStyle:{
    height:42,
    padding:0,
    borderWidth:0,
    borderWidth:1,
    borderRadius:4,
    borderColor:"#ccc"
  },
  inputStyle:{
    fontSize:14
  },
  tStyle:{
    flex:1,
    color:"#478CF9"
  },
  CheckBoxGroup:{
    flexDirection:"row"
  },
  checkbox:{
    flex:1,
    borderWidth:0,
    backgroundColor:"transparent"
  }
});
export default LoginView;
