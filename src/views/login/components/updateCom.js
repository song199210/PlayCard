import React,{Component} from "react";
import {View,StyleSheet,Modal,Image,Dimensions} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button,Input,Text,CheckBox } from 'react-native-elements';

class ReginCom extends Component {
  goLogin=()=>{
    this.props.closeEvent();
  }
  reginHandle=()=>{
    this.setState({
      isVisible:false
    });
  }
  render(){
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          this.props.closeEvent();
        }}
      >
        <View style={styles.loginBox}>
          <Image source={require("../../../images/headerImg.jpg")} style={styles.headerImg}/>
          <View style={styles.loginCon}>
            <View style={{marginBottom:10}}>
              <Input
                placeholder='手机号码'
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                leftIcon={
                  <Icon
                    name='phone'
                    size={20}
                    color='#478CF9'
                  />
                }
              />
              <View style={styles.formGroup}>
                <Input
                  placeholder='验证码'
                  containerStyle={{...styles.containerStyle,flex:1,marginRight:0}}
                  inputContainerStyle={{...styles.inputContainerStyle}}
                  inputStyle={styles.inputStyle}
                  leftIcon={
                    <Icon
                      name='envelope'
                      size={20}
                      color='#478CF9'
                    />
                  }
                />
                <Button onPress={()=>{this.reginHandle()}} buttonStyle={{width:100,marginRight:10,marginTop:6}} title="发送验证码"></Button>
              </View>
            </View>
            <Button onPress={()=>{this.reginHandle()}} buttonStyle={{marginLeft:10,marginRight:10}} title="立即验证"></Button>
            <View style={{flexDirection:"row",padding:10}}>
              <Text style={{...styles.tStyle,textAlign:"right"}} onPress={()=>{this.goLogin()}}>返回登录</Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles=StyleSheet.create({
  loginBox:{
    flex:1,
    alignItems:"center",
    backgroundColor:"#f6f3f7"
  },
  headerImg:{
    width:80,
    height:80,
    marginTop:50,
    borderRadius:80,
    borderWidth:1
  },
  loginCon:{
    width:Dimensions.get("window").width,
    marginLeft:20,
    marginRight:20,
    padding:20,
    paddingTop:10
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
    borderColor:"#478CF9"
  },
  formGroup:{
    flexDirection:"row"
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
export default ReginCom;
