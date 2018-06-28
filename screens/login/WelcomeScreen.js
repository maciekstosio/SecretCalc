import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, AsyncStorage } from 'react-native';
import Styles from '../../styles';
import Button from '../../components/Button';
import PasswordInput from '../../components/PasswordInput'
import * as Colors from '../../colors'

const INIT_STATE = {
    code: "",
    codeCheck: ""
}
export default class WelcomeScreen extends React.Component {
    state = { ... INIT_STATE };

    setPassword = () => {
        const {code, codeCheck} = this.state;
        if(code !== "" && code === codeCheck) {
            AsyncStorage.setItem('password', code); 
            this.setState(INIT_STATE);
            return true;
        }
        return false; 
    };

  render() {
    const width = Dimensions.get('window').width;
    return (
        <ScrollView horizontal={true} bounces={false} snapToInterval={width}>
            <View style ={[Styles.container, {width, justifyContent: 'center'}]}>
                 <View style = {{paddingHorizontal: 25}}>
                    <Text style={[styles.header, {fontSize: 54}]}>Welcome To Secret Gallery</Text>
                    <Text style={styles.text}>In Secret Gallery you can hide your photos behind a regular calculator</Text>
                </View>
            </View>
            <View style ={[Styles.container, {width, justifyContent: 'center'}]}>
                <View style = {{paddingHorizontal: 25, marginBottom: 10}}>
                    <Text style={styles.header}>Please choose a password</Text>
                    <PasswordInput onChangeText={(code)=> this.setState({code})} label='Insert Code'></PasswordInput>
                    <PasswordInput onChangeText={(codeCheck)=> this.setState({codeCheck})} label='Repeat Code'></PasswordInput>
                </View>
                <Button onPress={() => {if(this.setPassword()) this.props.onPress.call()}}>OK</Button>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 46,
        color: Colors.primary,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 25
    },
    text: {
        fontSize: 20,
        color: Colors.light,
        fontWeight: '300',
        textAlign: 'center'
    },
});