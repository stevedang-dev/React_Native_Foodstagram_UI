import React from 'react';
import { Text, View, Button, StyleSheet, Platform } from 'react-native';
import { Icon } from 'native-base';
import { 
    createBottomTabNavigator,
    createAppContainer 
} from 'react-navigation';
import HomeTab from './app-tab-navigator/HomeTab';
import SearchTab from './app-tab-navigator/SearchTab';
import AddMediaTab from './app-tab-navigator/AddMediaTab';
import LikesTab from './app-tab-navigator/LikesTab';
import ProfileTab from './app-tab-navigator/ProfileTab';

class MainScreen extends React.Component {

    static navigationOptions = {
        headerLeft: <Icon name="ios-camera" style={{paddingLeft: 10}}/>,
        title: 'Foodstagram',
        headerRight: <Icon name="ios-send" style={{paddingRight: 10}}/>
    }

    render() {
        return (
            <AppTabNavigatorRoot/>
        );
    }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator(
    {
        HomeTab: HomeTab,
        SearchTab: SearchTab,
        AddMediaTab: AddMediaTab,
        LikesTab: LikesTab,
        ProfileTab: ProfileTab,
    },
    {
        animationEnabled: true,
        swipeEnabled: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android:{
                        backgroundColor: 'white'
                    }
                })
            },
            // activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }

    }
);

const AppTabNavigatorRoot = createAppContainer(AppTabNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
