import React from 'react';
import Platform from 'react-native';
import Input from './Input';

export default class PasswordInput extends React.Component {
    render() {
        return (
            <Input
                {...this.props}
                keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'} 
                secureTextEntry={true} 
                keyboardAppearance="dark" 
                placeholder={this.props.label} 
                textAlign="right" 
                fontSize={20} 
                underlineColorAndroid="transparent" 
            />
        );
    }
}