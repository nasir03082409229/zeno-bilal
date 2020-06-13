/**
 * @format
 */

import { AppRegistry,  } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Splash } from './src/Screens';
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
