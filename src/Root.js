import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import homeScreen from './screen/Home';
import HomeTest from './screen/HomeTest';
import Menu from './components/menu';
const { width, heigth } = Dimensions.get('window');
const HomeStack = createStackNavigator({
    Home: {
        screen: homeScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'ADKO PORTAL',
            headerTintColor: 'white',
            headerLeft: <Menu navigation={navigation} />,
            headerStyle: {
                backgroundColor: '#404E67',

            }
        }),

    },
    Login: {
        screen: loginScreen,
    },
    Test: {
        screen: HomeTest
    },
}, {
    headerLayoutPreset: 'center',
    initialRouteName: 'Login'

},

);
const Drawer = createDrawerNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            drawerLabel: 'Anasayfa',
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-home" size={22} color={tintColor} />
            ),
        },
    },

    Test: {
        screen: HomeStack
    },
},
    {
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#404E67',
            inactiveBackgroundColor: '#375649',
        },
        drawerBackgroundColor: '#404E67',
        drawerWidth: width / 2,
        drawerType: 'slide',
    }
)
export default createAppContainer(Drawer);
