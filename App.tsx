import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapCityParkingsScreen from './screens/MapCityParkingsScreen';
import ParkingInfoScreen from './screens/ParkingInfoScreen';
import ParkingSearchScreen from './screens/ParkingSearchScreen';
import LoginScreen from './screens/LoginScreen';
import { ScreensName } from './types/index.d';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreensName.Home}>
        <Stack.Screen 
          name={ScreensName.Login}
          component={LoginScreen}
        />
        <Stack.Screen
          name={ScreensName.Home}
          component={HomeScreen}
        />
        <Stack.Screen 
          name={ScreensName.MapCityParkings}
          component={MapCityParkingsScreen}
        />
        <Stack.Screen 
          name={ScreensName.ParkingInfo}
          component={ParkingInfoScreen}
        />
        <Stack.Screen 
          name={ScreensName.ParkingSearch}
          component={ParkingSearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
