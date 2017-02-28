'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  ScrollView,
  Linking,
  Navigator,
  ToolbarAndroid
} from 'react-native';

class MainPage extends Component {
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{top: 50, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <View style={{borderWidth: 5, borderColor: '#d82e2e', borderRadius: 3, margin: 3, flex: 1, alignItems: 'center', justifyContent:'center'}}>
              <TouchableHighlight style={{height: 126, width: 152}}
                onPress={this.criminal.bind(this)}>
                <Image source={require('./Images/Criminal.jpg')}/>
              </TouchableHighlight>
              <Text style={{fontFamily: 'serif', fontSize: 18, margin: 10}}>Criminal/DWI</Text>
            </View>
            <View style={{borderWidth: 5, borderColor: '#d82e2e', borderRadius: 3, margin: 3, flex: 1, alignItems: 'center', justifyContent:'center'}}>
              <TouchableHighlight style={{height: 126, width: 152}}
                onPress={this.divorce.bind(this)}>
                <Image source={require('./Images/Divorce.jpg')}/>
              </TouchableHighlight>
              <Text style={{fontFamily: 'serif', fontSize: 18, margin: 10}}>Divorce</Text>
            </View>
          </View>
          <View style={{top: -40, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
            <View style={{borderWidth: 5, borderColor: '#d82e2e', borderRadius: 3, margin: 3, flex: 1, alignItems: 'center', justifyContent:'center'}}>
              <TouchableHighlight style={{height: 126, width: 152}}
                onPress={this.employment.bind(this)}>
                <Image source={require('./Images/employment.jpg')}/>
              </TouchableHighlight>
              <Text style={{fontFamily: 'serif', fontSize: 18, margin: 10}}>Employment</Text>
            </View>
            <View style={{borderWidth: 5, borderColor: '#d82e2e', borderRadius: 3, margin: 3, flex: 1, alignItems: 'center', justifyContent:'center'}}>
              <TouchableHighlight style={{height: 126, width: 152}}
                onPress={this.injured.bind(this)}>
                <Image source={require('./Images/injured.jpg')}/>
              </TouchableHighlight>
              <Text style={{fontFamily: 'serif', fontSize: 18, margin: 10}}>Injury</Text>
            </View>
          </View>
        </View>
    );
  }
  criminal() {
    this.props.navigator.push({
      id: 'CriminalPage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  divorce() {
    this.props.navigator.push({
      id: 'DivorcePage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  employment() {
    this.props.navigator.push({
      id: 'EmploymentPage',
      sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
  injured() {
    this.props.navigator.push({
       id: 'InjuredPage',
       sceneConfig: Navigator.SceneConfigs.FadeAndroid,
    });
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return null;
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', marginLeft: 47, fontSize: 26, fontFamily: 'roboto_bold'}}>
          Urgent Law
        </Text>
      </View>
    );
  }
};

module.exports = MainPage;