import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

class AddMediaTab extends React.Component {

    static navigationOptions = {
        title: 'Add',
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-add-circle" style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AddMediaTab</Text>
            </View>
        );
    }
}

export default AddMediaTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
