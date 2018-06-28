import React from 'react';
import { Text, View, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Colors from '../colors';

export default class Header extends React.Component {
    static defaultProps = {
        fontSize: 16,
        color: Colors.white
    }

    render() {
        const { color, backgroundColor, fontSize, onPress } = this.props;
        const content = <Text style={[ styles.font, { color }]}>{this.props.children.toUpperCase()}</Text>;
        
        if (Platform.OS === 'android') {
            return (
               <TouchableNativeFeedback onPress={onPress}> 
                    <View style={[styles.wrapper, { backgroundColor: Colors.primary }]}><Text style={{fontSize}}>{content}</Text></View>
               </TouchableNativeFeedback>    
            )
         } else {
            return (
               <TouchableOpacity activeOpacity={0.5} onPress={onPress}> 
                    <LinearGradient
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                        locations={[0, 0.75, 1.0]}
                        colors={[Colors.primaryLight, Colors.primary]}
                        style={styles.wrapper}
                    >
                        <Text style={{fontSize}}>{content}</Text>
                    </LinearGradient>
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



