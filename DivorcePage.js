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

class DivorcePage extends Component {
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
                  onPress={this.callDivorce.bind(this)}>
                    <Image source={require('./Images/Button.png')}/>
                </TouchableOpacity>
              </View>
          </ScrollView>
          <View
            style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#d82e2e'}}>
            <TouchableOpacity
              onPress={this.divorceHome.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.divorceAbout.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.divorceFAQ.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  F.A.Q.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.divorceContact.bind(this)}>
              <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                  Contact
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  //Need new number and URL
  callDivorce() {
    SendIntentAndroid.sendPhoneCall('917 843 8814');
  }
  divorceHome() {
    this.props.navigator.push({
      id: 'MainPage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  divorceAbout() {
    this.props.navigator.push({
      id: 'AboutDivorce',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  divorceFAQ() {
    this.props.navigator.push({
      id: 'FAQDivorce',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  divorceContact() {
    this.props.navigator.push({
      id: 'ContactDivorce',
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
        <Text style={{color: 'white', marginLeft: 48, fontSize: 24, fontFamily: 'roboto_bold'}}>
          Divorce Law
        </Text>
      </View>
    );
  }
};

module.exports = DivorcePage;