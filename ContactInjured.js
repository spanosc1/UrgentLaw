'use strict';

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
  ToolbarAndroid,
  BackAndroid,
  Alert
} from 'react-native';

var SendIntentAndroid = require('react-native-send-intent');

class ContactInjured extends Component {
  render() {
    return (
      <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#d82e2e'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  }
  renderScene(route, navigator) {
    return (
        <View>
          <ScrollView scrollEnabled={false}>
              <View style={{height: 700, flex: 1}}>

              </View>
            </ScrollView>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#d82e2e'}}>
            <TouchableOpacity
              onPress={this.injuredHome.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.injuredAbout.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.injuredFAQ.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  F.A.Q.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.back.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  Back
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  }
  injuredHome() {
    this.props.navigator.push({
      id: 'MainPage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  injuredAbout() {
    this.props.navigator.push({
      id: 'AboutInjured',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  injuredFAQ() {
    this.props.navigator.push({
      id: 'FAQInjured',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  back() {
    this.props.navigator.push({
      id: 'InjuredPage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return null
  },
  RightButton(route, navigator, index, nextState) {
    return null;
  },
  Title(route, navigator, index, nextState) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', marginLeft: 46, fontSize: 24, fontFamily: 'roboto_bold'}}>
          Contact Us
        </Text>
      </View>
    );
  }
};

module.exports = ContactInjured;