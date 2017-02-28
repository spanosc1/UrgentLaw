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

class EmploymentPage extends Component {
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
                  onPress={this.callEmployment.bind(this)}>
                    <Image source={require('./Images/Button.png')}/>
                </TouchableOpacity>
              </View>
          </ScrollView>
          <View
              style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#d82e2e'}}>
              <TouchableOpacity
                onPress={this.employmentHome.bind(this)}>
                <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                    Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.employmentAbout.bind(this)}>
                <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                    About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.employmentFAQ.bind(this)}>
                <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                    F.A.Q.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.employmentContact.bind(this)}>
                <Text style={{margin: 3, borderColor: 'white', borderWidth: 2, borderRadius: 3, padding: 5, textAlign: 'center', textAlignVertical: 'center', height: 44, fontSize: 14, color: 'white', backgroundColor: '#d82e2e', fontFamily: 'roboto_bold'}}>
                    Contact
                </Text>
              </TouchableOpacity>
          </View>
        </View>
      );
    }
    //Need new number and URL
    callEmployment() {
      SendIntentAndroid.sendPhoneCall('917 843 8814');
    }
    employmentHome() {
      this.props.navigator.push({
        id: 'MainPage',
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      });
    }
    employmentAbout() {
      this.props.navigator.push({
        id: 'AboutEmployment',
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      });
    }
    employmentFAQ() {
      this.props.navigator.push({
        id: 'FAQEmployment',
        sceneConfig: Navigator.SceneConfigs.FadeAndroid,
      });
    }
    employmentContact() {
      this.props.navigator.push({
        id: 'ContactEmployment',
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
        <Text style={{color: 'white', marginLeft: 27, fontSize: 24, fontFamily: 'roboto_bold'}}>
          Employment Law
        </Text>
      </View>
    );
  }
};

module.exports = EmploymentPage;