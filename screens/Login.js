import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import * as Colors from '../colors';
import Styles from '../styles'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor={Colors.dark}
          barStyle="light-content"
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Text style={Styles.font}>Login</Text></TouchableOpacity>
      </View>
    );
  }
}

