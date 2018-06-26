import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import NavigationButton from '../components/NavigationButton'
import Styles from '../styles'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: <NavigationButton title="Logout" leftIcon="lock" />,
    headerRight: <NavigationButton navigate="Settings" rightIcon="settings" />
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.font}>Home</Text>
      </View>
    );
  }
}

