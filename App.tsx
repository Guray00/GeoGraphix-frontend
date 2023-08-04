import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapCityParkingsScreen from './screens/MapCityParkingsScreen';
import ParkingInfoScreen from './screens/ParkingInfoScreen';
import ParkingSearchScreen from './screens/ParkingSearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen 
          name='MapCityParkins'
          component={MapCityParkingsScreen}
        />
        <Stack.Screen 
          name='ParkingInfo'
          component={ParkingInfoScreen}
        />
        <Stack.Screen 
          name='ParkingSearch'
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
