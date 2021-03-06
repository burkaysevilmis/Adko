import React, {Component} from 'react';
import {Dimensions, Button} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import homeScreen from './screen/Home';
import newsDetail from './screen/News-detail';
import VisitStart from './screen/VisitStart';
import loginScreen from './screen/Login';
import education from './screen/Education';
import dictionary from './screen/Dictionary';
import educationDetail from './screen/Education_detail';
import question from './screen/Question';
import questionadd from './screen/QuestionAdd';
import Offer from './screen/Offer';
import Menu from './components/menu';
const {width, heigth} = Dimensions.get('window');

const DictionaryStack = createStackNavigator(
  {
    Dictionary: {
      screen: dictionary,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const QuestionStack = createStackNavigator(
  {
    Question: {
      screen: question,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
        headerBackTitle: 'Geri',
        headerRight: () => (
          <Icon2
            onPress={() => navigation.navigate('QuestionAdd')}
            style={{marginRight: 20, color: 'white'}}
            name="plus"
            size={22}
          />
        ),
      }),
    },
    QuestionAdd: {
      screen: questionadd,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);
const OfferStack = createStackNavigator(
  {
    Offer: {
      screen: Offer,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const EducationStack = createStackNavigator(
  {
    Education: {
      screen: education,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
    EducationDetail: {
      screen: educationDetail,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
    Login: {
      screen: loginScreen,
    },
    NewsDetail: {
      screen: newsDetail,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
    initialRouteName: 'Login',
  },
);
const VisitStartStack = createStackNavigator(
  {
    VisitStart: {
      screen: VisitStart,
      navigationOptions: ({navigation}) => ({
        title: 'ADKO PORTAL',
        headerTintColor: 'white',
        headerLeft: <Menu navigation={navigation} />,
        headerStyle: {
          backgroundColor: '#404E67',
        },
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);
const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Anasayfa',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-home" size={22} color={tintColor} />
        ),
      },
    },
    VisitStart: {
      screen: VisitStartStack,
      navigationOptions: {
        drawerLabel: 'Ziyaret Başlangıç',
        style: {paddingRight: 10},
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-paper-plane" size={22} color={tintColor} />
        ),
      },
    },
    Education: {
      screen: EducationStack,
      navigationOptions: {
        drawerLabel: 'Eğitimler',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-school" size={22} color={tintColor} />
        ),
      },
    },
    Offer: {
      screen: OfferStack,
      navigationOptions: {
        drawerLabel: 'Öneriler',
        drawerIcon: ({tintColor}) => (
          <Icon
            name="ios-shuffle"
            style={{fontWeight: 'bold'}}
            size={28}
            color={tintColor}
          />
        ),
      },
    },
    Dictionary: {
      screen: DictionaryStack,
      navigationOptions: {
        drawerLabel: 'Sözlük',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-book" size={22} color={tintColor} />
        ),
      },
    },
    Question: {
      screen: QuestionStack,
      navigationOptions: {
        drawerLabel: 'Sorular',
        drawerIcon: ({tintColor}) => (
          <Icon name="ios-help" size={35} color={tintColor} />
        ),
      },
    },
  },
  {
    // initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#404E67',
      labelStyle: {
        color: 'white',
      },
    },
    drawerBackgroundColor: '#404E67',
    drawerWidth: width / 1.5,
    drawerType: 'slide',
  },
);
export default createAppContainer(Drawer);
