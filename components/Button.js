import React from 'react';
import { Text, View, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from 'react-native';
import * as Colors from '../colors';

export default class Header extends React.Component {
    static defaultProps = {
        fontSize: 20,
        color: Colors.white,
        backgroundColor: Colors.primary
    }

    render() {
        const { color, backgroundColor, fontSize, onPress } = this.props;
        const content = <Text style={[ styles.font, { color }]}>{this.props.children.toUpperCase()}</Text>;
        
        if (Platform.OS === 'android') {
            return (
               <TouchableNativeFeedback onPress={onPress}> 
                    <View style={[styles.wrapper, { backgroundColor, fontSize }]}>{content}</View>
               </TouchableNativeFeedback>    
            )
         } else {
            return (
               <TouchableOpacity style={[styles.wrapper, { backgroundColor, fontSize }]} activeOpacity={0.5} onPress={onPress}> 
                    {content}
               </TouchableOpacity>    
            )
         }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 20,
        borderRadius: 20,
        alignItems: 'center'
    },
    font: {
        fontWeight: '600'
    }
});


