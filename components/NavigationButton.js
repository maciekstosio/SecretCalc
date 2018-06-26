import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from './Icon'
import * as Colors from '../colors';

class NavigationButton extends React.Component {
    static defaultProps = {
        title: '',
        icon: '',
        color: Colors.light,
        navigate: 'Back'
    }

    render() {
        const { title, color, navigate, icon, navigation, rightIcon, leftIcon} = this.props
        return <TouchableOpacity 
                    onPress={() => { 
                        if (navigate.toLowerCase() === 'back') this.props.navigation.goBack();
                        else navigation.navigate(navigate);
                    }}
                    style={styles.button}
                    activeOpacity={0.5}
                >
                    {!!leftIcon && <Icon name={leftIcon} color={Colors.light} size={22} style={styles.leftIcon} />}
                    <Text style={styles.text}>{title}</Text>
                    {!!rightIcon && <Icon name={rightIcon} color={Colors.light} size={22} style={styles.rightIcon} />}
                </TouchableOpacity>;
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        flexDirection: 'row'
    },
    text: {
        color: Colors.light,
        fontSize: 16,
    },
    leftIcon: {
        marginRight: 10,
        marginTop: -2
    },
    rightIcon: {
        marginLeft: 10,
        marginTop: -2
    }
});

NavigationButton.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    navigate: PropTypes.string.isRequired,
  };


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(NavigationButton);