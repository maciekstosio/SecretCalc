import React from 'react';
import { Platform } from 'react-native';
import VectorIcon from 'react-native-vector-icons/Ionicons';

export default class Icon extends React.Component {
    render() {
        const platform = Platform.OS === 'ios' ? 'ios' : 'md';
        const name = platform + '-' + this.props.name;

        return <VectorIcon {...this.props} name={name}/>
    }
}