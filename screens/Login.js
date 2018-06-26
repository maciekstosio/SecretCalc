import React from 'react';
import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native';
import NavigationButton from '../components/NavigationButton'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Text>Login</Text></TouchableOpacity>
      </View>
    );
  }
}

