import React from 'react';
import { AsyncStorage, View, Text, StatusBar, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions, Modal, ScrollView } from 'react-native';
import * as Colors from '../../colors';
import Styles from '../../styles';
import WelcomeScreen from './WelcomeScreen';

const INIT_STATE = {
  text: 0,
  total: 0,
  value: 0,
  operation: ""
};

const MAX_VALUE = 99999;

const MARGIN = 1;

export default class Login extends React.Component {
	state = { ...INIT_STATE, modalSetPassword: false };

	componentDidMount() {
		AsyncStorage.setItem('password', "");
		AsyncStorage.getItem('password').then((password) => {
			if(!password) this.setState({modalSetPassword: true});
		});
	}

  static navigationOptions = {
    header: null
  };

  pressNumber = (text) => {
	  console.log(this.state.isPasswordSet);
    const value = this.state.value;
    const num = parseInt(text);
    if (value === 0 && num === 0) return;
    const newValue = Math.min(value * 10 + num, MAX_VALUE);
    this.setState({ text: newValue, value: newValue });
  };

  calculateTotal = () => {
    const { value, total, operation } = this.state;

    switch (operation) {
      case "+": return total + value;
      case "-": return total - value;
      case "×": return total * value;
      case "": return value;
      case "=": return (value === 0) ? total : value;
    }
  };

  calculate = (operation) => {
    const total = Math.min(this.calculateTotal(), MAX_VALUE);
    this.setState({
      total,
      operation,
      text: total,
      value: 0
    });
  };

	handleLongPress = () => {
		AsyncStorage.getItem('password').then((password) => {
			if(parseInt(password) === this.state.text) {
				this.setState(INIT_STATE);
				this.props.navigation.navigate('Gallery');
			}
		});
    };
  
  hideWelcomeScreen = () => this.setState({modalSetPassword: false});

  render() {
    const size = (Dimensions.get('window').width - MARGIN * 3) / 4;
    const dimentions = { width: size, height: size };

    const CalculatorButton = (props) => <TouchableOpacity onPress={props.onPress} style={[styles.regularButton, dimentions, { backgroundColor: props.color }]}><Text style={styles.reguralButtonText}>{props.text}</Text></TouchableOpacity>

    const GreyButton = (props) => <CalculatorButton onPress={() => this.pressNumber(props.text)} text={props.text} color={Colors.light} />
    const RedButton = (props) => <CalculatorButton onPress={() => this.calculate(props.text)} text={props.text} color={Colors.primary} />

    return (
      <View style={[Styles.container, { justifyContent: 'flex-end' }]}>
        <StatusBar
          backgroundColor={Colors.dark}
          barStyle="light-content"
        />
		<Modal visible={this.state.modalSetPassword} animationType="slide">
			<WelcomeScreen onPress={() => this.hideWelcomeScreen()}></WelcomeScreen>
		</Modal>
        <TouchableWithoutFeedback onLongPress={this.handleLongPress}>
			<View>
				<Text style={styles.text}>{this.state.text}</Text>
			</View>
		</TouchableWithoutFeedback>
		<View style={styles.row}>
			<GreyButton text="7"/>
			<GreyButton text="8"/>
			<GreyButton text="9"/>
			<RedButton text="×"/>
		</View>
		<View style={styles.row}>
			<GreyButton text="4"/>
			<GreyButton text="5"/>
			<GreyButton text="6"/>
			<RedButton text="-"/>
		</View>
		<View style={styles.row}>
			<GreyButton text="1"/>
			<GreyButton text="2"/>
			<GreyButton text="3"/>
			<RedButton text="+"/>
		</View>
		<View style={styles.row}>
			<CalculatorButton onPress={() => this.setState(INIT_STATE)} text="C" color={Colors.light}/>
			<GreyButton text="0"/>
			<View style={[styles.regularButton, dimentions, {backgroundColor: Colors.light}]}/>
			<RedButton text="="/>
		</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    regularButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    reguralButtonText: {
        color: Colors.white,
        fontWeight: '200',
        fontSize: 56
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: MARGIN
    },
    text: {
        fontSize: 116,
        color: Colors.white,
        fontWeight: '100',
        textAlign: 'right',
        marginBottom: 5,
        marginRight: 15
    }
});