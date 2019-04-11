import React,{Component} from "react";
import {Text, FlatList, View, StyleSheet} from "react-native";
import { Card,Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let datasource=[
  {
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  },{
    id:"001",
    title:"我是标题",
    content:"我是内容",
    imgurl:"http://192.168.1.58:8080/test.jpg"
  }
];
class NoticeView extends React.PureComponent {
  static navigationOptions = (props)=>{
      return {
          headerTitle:(<Text style={{ flex: 1,color:"#fff",fontSize:16,textAlign: 'center' }}>公告列表</Text>),
          headerStyle:{
              backgroundColor:"#478CF9",
              height:48
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
  constructor(props){
    super(props);
    this.state={
      isRefresh:false
    }
  }
  rFlatListItem=({item})=>{
    return (
      <Card
        containerStyle={styles.containerStyle}
        titleStyle={styles.titleStyle}
        title={item.title}
        key={Math.random()}>
        <View>
          <Image
            source={require("../../images/test.jpg")}
            resizeMode="cover"
            style={styles.conImageStyle}
          />
          {/* <Image style={styles.conImageStyle} source={{ uri:  }}/> */}
          <Text>{item.content}</Text>
        </View>
        <Button
          icon={<Icon name='bell-o' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='查看公告' />
      </Card>
    );
  }
  _onRefresh=()=>{
    datasource.push({
      id:"001",
      title:"我是标题2342",
      content:"我是内容",
      imgurl:"http://192.168.1.58:8080/test.jpg"
    });
  }
  render(){
      return (
        <View style={styles.container}>
          <FlatList
            data={datasource}
            renderItem={this.rFlatListItem}
            //下拉刷新相关
            onRefresh={() => this._onRefresh()}
            refreshing={this.state.isRefresh}
          />
        </View>
      );
  }
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  containerStyle:{
    borderWidth:1,
    borderColor:"#eee",
    marginLeft:6,
    marginRight:6,
    marginTop:5,
    marginBottom:5,
    padding:10,
    backgroundColor:"#fff",
    borderRadius:4
  },
  titleStyle:{
    textAlign:"left",
    padding:0,
    margin:0
  },
  conImageStyle:{
    height:160,
  }
})
export default NoticeView;