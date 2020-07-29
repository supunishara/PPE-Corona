/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Main from './src/screens/Main';
import {name as appName} from './app.json';
import bgMessaging from './src/config/bgMessaging';


AppRegistry.registerComponent(appName, () => Main);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging);
