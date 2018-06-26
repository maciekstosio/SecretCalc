import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import * as Colors from '../colors';

class NavigationButton extends React.Component {
    static defaultProps = {
        title: 'Button',
        color: Colors.light,
        navigate: 'Back'
    }

    render() {
        const { title, color, navigate, navigation} = this.props
        return <Button 
            title={title}
            color={color} 
            onPress={() => { 
                if (navigate.toLowerCase() === 'back') this.props.navigation.goBack();
                else navigation.navigate(navigate);
            }} />;
    }
}

NavigationButton.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    navigate: PropTypes.string.isRequired,
  };


// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(NavigationButton);