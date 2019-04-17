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

import LoginView from "./src/views/login";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
var navigation = null;
class App extends React.PureComponent {                                                                            
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
        <LoginView />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  }
});

// export default createAppContainer(AppNavigator);
export default App;
