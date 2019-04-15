import React,{Component} from "react";
import {View,Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';

const { Marker, Arc, Circle, Polyline, Polygon, InfoWindow } = Overlay;
class OpenedView extends React.PureComponent {
  static navigationOptions = (props)=>{
      return {
          headerTitle:(<Text style={{ flex: 1,color:"#fff",fontSize:16,textAlign: 'center' }}>打卡记录</Text>),
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
  state={
    center:{latitude: 30.2530820000, longitude:120.2155100000},
    markers:[{
      longitude: 113.896198,
      latitude: 22.959144,
      title: 'title',
    }]
  }
  render(){
      let MarkerCom=this.state.markers.map((item,index)=>{
        return (
          <Marker
            key={index}
            title={item.title}
            icon={require("../../images/person.png")}
            location={{latitude:item.latitude,longitude:item.longitude}}/>
        );
      });
      return (
        <View style={{flex:1,height:100}} >
          <MapView 
            style={{flex:1}} 
            center={this.state.center}
            marker={this.state.markers}
            zoom={18}
            onMapLoaded={()=>{
              Geolocation.getCurrentPosition().then(data => {
                console.log(JSON.stringify(data))
                this.setState({
                  center: {
                    longitude: data.longitude,
                    latitude: data.latitude
                  },
                  markers: [{
                    longitude: data.longitude,
                    latitude: data.latitude,
                    title: data.district + data.street
                  }]
                })
              }).catch(e =>{
                  console.warn(e, 'error');
              })
            }}>
            {MarkerCom}
            </MapView>
        </View>
      );
  }
}
export default OpenedView;