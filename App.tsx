import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import MapCityParkingsScreen from './screens/MapCityParkingsScreen';
import { ScreensName } from './types/index.d';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreensName.Home}>
        <Stack.Screen
          name={ScreensName.Home}
          component={HomeScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name={ScreensName.MapCityParkings}
          component={MapCityParkingsScreen}
          options={{
            title: "City"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
