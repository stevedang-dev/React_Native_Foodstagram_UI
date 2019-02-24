import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class HomeTab extends React.Component {

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HomeTab</Text>
            </View>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
