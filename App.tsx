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
          options={{
            headerShown: false
          }}
        />
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
        <Stack.Screen 
          name={ScreensName.ParkingInfo}
          component={ParkingInfoScreen}
          options={{
            title: "Parking"
          }}
        />
        <Stack.Screen 
          name={ScreensName.ParkingSearch}
          component={ParkingSearchScreen}
          options={{
            title: "Search"
          }}
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
