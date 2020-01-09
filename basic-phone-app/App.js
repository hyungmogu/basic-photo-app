import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Camera: {screen: CameraScreen},
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerShown: false
  }
});

const App = createAppContainer(MainNavigator);

export default App;