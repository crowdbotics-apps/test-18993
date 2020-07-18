import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps80704Navigator from '../features/Maps80704/navigator';
import Settings80682Navigator from '../features/Settings80682/navigator';
import Settings80667Navigator from '../features/Settings80667/navigator';
import NotificationList80666Navigator from '../features/NotificationList80666/navigator';
import Maps80665Navigator from '../features/Maps80665/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps80704: { screen: Maps80704Navigator },
Settings80682: { screen: Settings80682Navigator },
Settings80667: { screen: Settings80667Navigator },
NotificationList80666: { screen: NotificationList80666Navigator },
Maps80665: { screen: Maps80665Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
