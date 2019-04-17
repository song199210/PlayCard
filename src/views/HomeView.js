/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import NoticeView from "./notice";
import OpenedView from "./opened";
import MeView from "./me";

var navigation = null;
class HomeView extends React.PureComponent {                                                                            
  constructor(props){
    super(props);
    navigation = this.props.navigation;
    this.state = {
      selectedTab:'Notice'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator
          tabBarStyle={styles.tabBarStyle}
          hidesTabTouch={true}
          >
            <TabNavigator.Item  
                selected={this.state.selectedTab === 'Notice'}  
                title="公告"  
                titleStyle={styles.tabText}  
                selectedTitleStyle={styles.selectedTabText}  
                tabStyle={{alignSelf:'center'}}
                renderIcon={() => <Image style={styles.icon} source={require("../images/notice.png")} />}  
                renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/notice_s.png")} />}  
                onPress={() => this.setState({ selectedTab: 'Notice' })}>  
                <NoticeView />  
            </TabNavigator.Item> 
            <TabNavigator.Item  
                selected={this.state.selectedTab === 'Opened'}  
                title="打卡"  
                titleStyle={styles.tabText}  
                selectedTitleStyle={styles.selectedTabText}  
                tabStyle={{alignSelf:'center'}}
                renderIcon={() => <Image style={styles.icon} source={require("../images/playcard.png")} />}  
                renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/playcard_s.png")} />}  
                onPress={() => this.setState({ selectedTab: 'Opened' })}>  
                <OpenedView />
            </TabNavigator.Item>  
            <TabNavigator.Item  
                selected={this.state.selectedTab === 'Me'}  
                title="设置"  
                titleStyle={styles.tabText}  
                selectedTitleStyle={styles.selectedTabText}  
                tabStyle={{alignSelf:'center'}}
                renderIcon={() => <Image style={styles.icon} source={require("../images/me.png")} />}  
                renderSelectedIcon={() => <Image style={styles.icon} source={require("../images/me_s.png")} />}  
                onPress={() => this.setState({ selectedTab: 'Me' })}>  
                <MeView />
            </TabNavigator.Item>  
        </TabNavigator>  
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  tabBarStyle:{
    color:"#fff"
  },
  tabIcon:{
    width:23,
    height:23,
  },
  tabText:{
    color:'#333'
  },
  selectedTabText:{
    color:'#478CF9'
  },
  icon:{
    width:20,
    height:20
  }
});

// export default createAppContainer(AppNavigator);
export default HomeView;
