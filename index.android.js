/**
* This is the start point of the app on the Android platform
* You can ignore this file since it only links to the src/Main.js file
**/

import { AppRegistry } from 'react-native';
import Main from './src/Main';
//Rename App https://piszek.com/2017/02/07/react-native-rename-my-app/
//Change logo https://myexperimentswithweb.wordpress.com/2016/05/23/changing-app-icon-in-android-react-native-generated-apps/
AppRegistry.registerComponent('Shop', () => Main);
