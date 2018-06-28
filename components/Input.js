import React from 'react';
import { TouchableWithoutFeedback, TextInput, Text, View, StyleSheet } from 'react-native';
import * as Colors from '../colors';

// const FONT_SCALE = 0.8;

export default class Input extends React.Component {
    input = null

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => this.input.focus()}>
                <View style={styles.inputWrapper}>
                    <Text style={[styles.inputInput, { fontSize: this.props.fontSize}]}>{this.props.label}</Text>
                    <TextInput ref={(r) => this.input = r} style={[styles.inputInput]} placeholderTextColor={Colors.darkGray} {...this.props} />
                    {/* <Text style={[styles.inputLabel, { fontSize: this.props.fontSize*FONT_SCALE}]}>{this.props.label}</Text>
                    <TextInput ref={(r) => this.input = r} style={[styles.inputInput]} placeholderTextColor={Colors.light} {...this.props} /> */}
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
    // inputLabel: {
    //     color: Colors.gray
    // },
    inputInput: {
        color: Colors.light,
        // textAlign: 'center',
        // flex: 1
    }
});



