import { AppRegistry } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './screens/Login'
import Home from './screens/Home'
import Settings from './screens/Settings'
import * as Colors from './colors'

const RootStack = createStackNavigator(
    {
        Login,
        Home,
        Settings,
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.dark,
                borderBottomWidth: 0
            },
            headerTintColor: Colors.white,
        },
    }
);

class App extends React.Component {
    render() {
        return <RootStack />
    }
}

console.disableYellowBox = true;

AppRegistry.registerComponent('SecretCalc', () => App);
