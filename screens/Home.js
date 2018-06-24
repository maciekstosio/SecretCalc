import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import NavigationButton from '../components/NavigationButton'
import Styles from '../styles'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: <NavigationButton title="Logout" />,
    headerRight: <NavigationButton title="Settings" navigate="Settings" />
  };

  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.font}>Home</Text>
      </View>
    );
  }
}

