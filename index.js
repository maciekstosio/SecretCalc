import { AppRegistry } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { RkTheme } from 'react-native-ui-kitten';
import Login from './screens/login/Login'
import Gallery from './screens/Gallery'
import Settings from './screens/Settings'
import * as Colors from './colors'

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

console.disableYellowBox = true;

AppRegistry.registerComponent('SecretCalc', () => App);
