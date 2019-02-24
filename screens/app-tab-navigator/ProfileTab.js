import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class ProfileTab extends React.Component {

    static navigationOptions = {
        title: 'Profile',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-person" style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ProfileTab</Text>
            </View>
        );
    }
}

export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
