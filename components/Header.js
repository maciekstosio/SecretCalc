import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Colors from '../colors';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.font}>{this.props.children.toUpperCase()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 25,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderBottomColor: Colors.darkBlack,
        borderBottomWidth: 1,
    },
    font: {
        color: Colors.light,
        fontWeight: '600'
    }
});



