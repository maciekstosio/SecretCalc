import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import Styles from '../styles'

export default class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.font}>Settings</Text>
      </View>
    );
  }
}

