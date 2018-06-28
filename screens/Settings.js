import React from 'react';
import { AsyncStorage, View, Platform, Alert } from 'react-native';
import Input from '../components/Input';
import Header from '../components/Header';
import Button from '../components/Button';
import Styles from '../styles';

const INIT_STATE = { 
    oldCode: "", 
    newCode: "", 
    repeatNewCode: ""
};

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };

    state = {
        ...INIT_STATE
    }

    changePassword = () => {
        const {oldCode, newCode, repeatNewCode } = this.state;
        if(newCode === "") return;
        AsyncStorage.getItem('password').then((password) => {
            if(password === oldCode && newCode === repeatNewCode) {
                AsyncStorage.setItem('password', newCode);  
                this.setState(INIT_STATE);
                Alert.alert('Password Changed', '', [{text: 'OK'}]);
            }
        });
    }

    render() {
        const PasswordInput = (props) =>  <Input
                                            {...props}
                                            keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'} 
                                            secureTextEntry={true} 
                                            keyboardAppearance="dark" 
                                            placeholder={props.label} 
                                            textAlign="right" 
                                            fontSize={20} 
                                            underlineColorAndroid="transparent" 
                                        />
        return (
            <View style={Styles.container} >
                <Header>Change code</Header>

                <PasswordInput label="Old code" value={this.state.oldCode} onChangeText={(oldCode) => this.setState({oldCode})} />
                <PasswordInput label="New code" value={this.state.newCode} onChangeText={(newCode) => this.setState({newCode})}  />
                <PasswordInput label="Repeat new code" value={this.state.repeatNewCode} onChangeText={(repeatNewCode) => this.setState({repeatNewCode})}  />

                <Button onPress={() => this.changePassword()}>Change password</Button>
            </View>
        );
    }
}