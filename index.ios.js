import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Linking,
  Navigator,
  ToolbarAndroid
} from 'react-native';

var MainPage = require('./MainPage');
var DivorcePage = require('./DivorcePage');
var InjuredPage = require('./InjuredPage');
var CriminalPage = require('./CriminalPage');
var EmploymentPage = require('./EmploymentPage');

export default class HarassmentHotline extends Component {
  render() {
      return (
        <Navigator
            initialRoute={{id: 'MainPage', name: 'Index'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig;
              }
              return Navigator.SceneConfigs.FloatFromRight;
            }} />
      );
    }
    renderScene(route, navigator) {
      var routeId = route.id;
      if (routeId === 'EmploymentPage') {
        return (
          <EmploymentPage
            navigator={navigator} />
        );
      }
      if (routeId === 'DivorcePage') {
        return (
          <DivorcePage
            navigator={navigator} />
        );
      }
      if (routeId === 'MainPage') {
        return (
          <MainPage
              navigator={navigator} />
        );
      }
      if (routeId === 'CriminalPage') {
        return (
          <CriminalPage
            navigator={navigator} />
        );
      }
      if (routeId === 'InjuredPage') {
        return (
          <InjuredPage
              navigator={navigator} />
        );
      }
      return this.noRoute(navigator);

    }
    noRoute(navigator) {
      return (
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={() => navigator.pop()}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Invalid route, tap here to go back</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

AppRegistry.registerComponent('HarassmentHotline', () => HarassmentHotline);
