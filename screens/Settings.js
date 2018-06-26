import React from 'react';
import { View, Platform } from 'react-native';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import Styles from '../styles';
import * as Colors from '../colors';

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View style={Styles.container} >
                <Header>Change code</Header>

                <Input label="Old code" keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'} secureTextEntry={true} keyboardAppearance="dark" placeholder="Old code" textAlign="right" fontSize={20} underlineColorAndroid="transparent" />
                <Input label="New code" keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'} secureTextEntry={true} keyboardAppearance="dark" placeholder="New code" textAlign="right" fontSize={20} underlineColorAndroid="transparent" />
                <Input label="Repeat new code" keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'} secureTextEntry={true} keyboardAppearance="dark" placeholder="Repeat new code" textAlign="right" fontSize={20} underlineColorAndroid="transparent" />

                <Button>Change password</Button>
            </View>
        );
    }
}