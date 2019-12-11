import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import homeScreen from './screen/Home';
const HomeStack =createStackNavigator({
    Home:{
        screen:homeScreen,
        navigationOptions:{
            title:'ADKO PORTAL',
            headerTintColor:'white',
            headerStyle:{
                backgroundColor:'#404E67',
                
            }
        },
        
    }
},{
    headerLayoutPreset:'center'
}
);
const Drawer =createDrawerNavigator({
    Home:{
        screen:HomeStack,
        navigationOptions: {
            drawerLabel: 'Anasayfa',
           
          },
    }
})
export default createAppContainer(Drawer);