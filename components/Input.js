import React from 'react';
import { TouchableWithoutFeedback, TextInput, Text, View, StyleSheet } from 'react-native';
import * as Colors from '../colors';

export default class Input extends React.Component {
    input = null

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.input.focus()}>
                <View style={styles.inputWrapper}>
                    <Text style={[styles.input, { fontSize: this.props.fontSize }]}>{this.props.label}</Text>
                    <TextInput ref={(r) => this.input = r} style={[styles.input]} placeholderTextColor={Colors.darkGray} {...this.props} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderBottomColor: Colors.darkBlack,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    input: {
        color: Colors.light,
    }
});



