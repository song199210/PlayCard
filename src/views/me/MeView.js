import React,{Component} from "react";
import {View,Image,Text,StyleSheet} from "react-native";
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const list = [
  {
    name: '打卡记录'
  },{
    name: '消息管理'
  }
];
class MeView extends React.Component {
  
  static navigationOptions = (props)=>{
    return {
      headerTitle:(<Text style={{ flex: 1,color:"#fff",fontSize:16,marginLeft:60,textAlign: 'center' }}>设置</Text>),
      headerRight:(<Icon name="cog" style={{color:"#fff",fontSize:20}} />),
      headerStyle:{
          backgroundColor:"#478CF9",
          height:48,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity:0,
          shadowRadius:0,
          elevation:0
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
        <View style={styles.container}>
          <View style={styles.Header}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Image style={styles.headerImg} source={require("../../images/headerImg.jpg")}/>
              <Text style={{marginBottom:20,color:"#fff",fontSize:14}}>Hello Kitty</Text>
            </View>
          </View>
          {
            list.map((item,index)=>{
              return (<ListItem
                key={index}
                containerStyle={styles.containerStyle}
                titleStyle={{fontSize:15}}
                rightIcon={<Icon name="chevron-right"/>}
                title={item.name}
              />);
            })
          }
          <ListItem
            containerStyle={Object.assign({marginTop:10,borderTopWidth:1,borderTopColor:"#eee"},styles.containerStyle)}
            titleStyle={{fontSize:15}}
            title="系统设置"
          />
        </View>
      );
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#efefef"
  },
  Header:{
    backgroundColor:"#478CF9",
    opacity:.9,
    height:180,
  },
  HeaderTop:{
    height:48, 
    justifyContent:"center",
    alignItems:"center"
  },
  headerImg:{
    width:80,
    height:80,
    marginBottom:6,
    borderRadius:80,
    borderWidth:1
  },
  haveBrd:{
    color:"#fff",
    fontSize:16
  },
  containerStyle:{
    borderBottomWidth:1,
    height:48,
    borderBottomColor:"#eee",
    backgroundColor:"#fff"
  }
})
export default MeView;