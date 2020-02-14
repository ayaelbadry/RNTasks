import {AppRegistry, UIManager} from 'react-native';
import App from './App';
// this step is important to use LayoutAnimation 
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

AppRegistry.registerComponent('FlatLiist', () => App);
