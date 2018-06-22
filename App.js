import React from 'react';
import { View, Text, Button, StatusBar, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SecretCalc',
    headerStyle: { backgroundColor: '#2A2A2A', borderBottomWidth: 0 },
    headerTitleStyle: { color: '#EE4C2B' },
    headerRight: (
      <Button title="Settings" color="#C0BCBC" />
    ),
    headerLeft: (
      <Button title="Logout" color="#C0BCBC" />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#000' }}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        {/* <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} />
        <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} />
        <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} />
        <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} />
        <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} />
        <Image source={{uri: 'https://yt3.ggpht.com/a-/ACSszfEuQtkiQVvPtHddMka2hPqgEWxOyKWyxWwWYw=s900-mo-c-c0xffffffff-rj-k-no'}} style={{width: 96, height: 96}} /> */}
        <View style={{position: 'absolute', bottom: 20, left: 0, right: 0, alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.7} style={{ width: 76, height: 76, backgroundColor: '#EE4C2B', shadowColor: '#f0f', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.5, shadowRadius: 5, borderRadius: 38 }}><Text>+</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});
