import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import homeScreen from './screen/Home';
import newsDetail from './screen/News-detail';
import education from './screen/Education';
import educationDetail from './screen/Education_detail';
import loginScreen from './screen/Login';
import Menu from './components/menu';
const { width, heigth } = Dimensions.get('window');
const LoginStack=createStackNavigator({
    Login: {
        screen: loginScreen,

    },
})
const EducationStack = createStackNavigator({
    Education: {
        screen: education,
        navigationOptions: ({ navigation }) => ({
            title: 'ADKO PORTAL',
            headerTintColor: 'white',
            headerLeft: <Menu navigation={navigation} />,
            headerStyle: {
                backgroundColor: '#404E67',

            }
        }),

    },
    EducationDetail: {
        screen: educationDetail,
        navigationOptions: ({ navigation }) => ({
            title: 'ADKO PORTAL',
            headerTintColor: 'white',
            headerLeft: <Menu navigation={navigation} />,
            headerStyle: {
                backgroundColor: '#404E67',

            }
        }),
    },
},
    {
        headerLayoutPreset: 'center',

    });
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
 
    NewsDetail: {
        screen: newsDetail,
        navigationOptions: ({ navigation }) => ({
            title: 'ADKO PORTAL',
            headerTintColor: 'white',
            headerLeft: <Menu navigation={navigation} />,
            headerStyle: {
                backgroundColor: '#404E67',

            }
        }),
    },
},
    {
        headerLayoutPreset: 'center',

    }
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
    Education: {
        screen: EducationStack,
        navigationOptions: {
            drawerLabel: 'Eğitimler',
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-school" size={22} color={tintColor} />
            ),
        },
    },
    Login: {
        screen: LoginStack,
        navigationOptions:{
            
        }

    },
},
    {
        initialRouteName: 'Login',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: '#404E67',

        },
        drawerBackgroundColor: '#404E67',
        drawerWidth: width / 2,
        drawerType: 'slide',
    }
)
export default createAppContainer(Drawer);
