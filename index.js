import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './screens/login/Login';
import Gallery from './screens/Gallery';
import Settings from './screens/Settings';
import * as Colors from './colors';

console.disableYellowBox = true;

const RootStack = createStackNavigator(
    {
        Login,
        Gallery,
        Settings,
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.dark,
                borderBottomWidth: 0
            },
            headerTitleStyle: {
                color: Colors.primary
            },
            headerTintColor: Colors.light,
        },
    }
);

class App extends React.Component {
    render() {
        return <RootStack />
    }
}


AppRegistry.registerComponent('SecretCalc', () => App);
