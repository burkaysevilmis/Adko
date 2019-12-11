import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from './screen/Home';
const HomeStack =createStackNavigator({
    Home:homeScreen,
});
const Drawer =createDrawerNavigator({
    Home:{
        screen:HomeStack
    }
})
export default createAppContainer(Drawer);