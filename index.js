import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
import { onMessageReceived } from '@app/services/notifications';
import './src/localization/i18n';

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);

AppRegistry.registerComponent(appName, () => App);
