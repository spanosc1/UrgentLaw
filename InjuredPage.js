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
  ToolbarAndroid
} from 'react-native';

var SendIntentAndroid = require('react-native-send-intent');

class InjuredPage extends Component {
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
              <View style={{height: 700, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={this.callInjured.bind(this)}>
                    <Image source={require('./Images/Button.png')}/>
                </TouchableOpacity>
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
                onPress={this.injuredContact.bind(this)}>
                <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                    Contact
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
    //Need new number and URL
    callInjured() {
      SendIntentAndroid.sendPhoneCall('917 843 8814');
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
    injuredContact() {
      this.props.navigator.push({
        id: 'ContactInjured',
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      });
    }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, nextState) {
    return null;
  },
  RightButton(route, navigator, index, nextState) {
    return null;
  },
  Title(route, navigator, index, nextState) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', marginLeft: 59, fontSize: 24, fontFamily: 'roboto_bold'}}>
          Injury Law
        </Text>
      </View>
    );
  }
};

module.exports = InjuredPage;