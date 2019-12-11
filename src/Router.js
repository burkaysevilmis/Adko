import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../src/screens/HomeScreen';
import DetailScreen from '../src/screens/Detail';
import ContactScreen from './screens/ContactScreen';
import LoginScreen from './screens/Login';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerButton from './components/DrawerButton';
const {width, heigth} = Dimensions.get('window');
const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: <DrawerButton navigation={navigation} />,
      }),
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactScreen,
    navigationOptions: {
      headerBackTitle: 'Geri',
    },
  },
});
const LoginStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: MainStack,
      navigationOptions: {
        drawerLabel: 'Anasayfa',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-home" size={22} color={tintColor} />
        ),
      },
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-contact" size={22} color={tintColor} />
        ),
      },
    },
    Login: {
      screen: LoginStack,
      navigationOptions: {
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-share-alt" size={22} color={tintColor} />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#D1B6E1',
      inactiveBackgroundColor: '#a3a1a1',
    },

    drawerBackgroundColor: '#519D9E',
    drawerWidth: width / 2,
    drawerType: 'slide',
  },
);
export default createAppContainer(Drawer);
// const MainStack = createStackNavigator(
//     {
//       Home: {
//         screen: HomeScreen,
//       },
//       Detail: {
//         screen: DetailScreen,
//       },
//     },
//     {
//       initialRouteName: 'Home',
//       headerLayoutPreset: 'center',
//       defaultNavigationOptions: {
//         headerTransparent: true,
//         headerTitleStyle: {
//           color: 'white',
//           fontSize: 22,
//           borderBottomColor: '#387387',
//           borderBottomWidth: 2,
//         },
//       },
//     },
//   );
