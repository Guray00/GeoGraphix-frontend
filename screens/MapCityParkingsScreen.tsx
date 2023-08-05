import { BlurView } from "expo-blur";
import { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import MapView,{Marker, PROVIDER_GOOGLE} from "react-native-maps";
import { themeStyles } from "../styleSheet/theme";

const MapCityParkingsScreen: React.FC = () => {
    const [parkingInfo, setParkingInfo] = useState<{} | null>(null)
    return (
        <SafeAreaView style={{flex: 1, position: 'relative'}}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={{height: '100%', width: '100%'}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={()=>parkingInfo && setParkingInfo(null)}
            >
                <Marker 
                    coordinate={{longitude: -122.4324, latitude: 37.78825}}
                    title="Daouda"
                    description="Ciao"
                    onPress={()=>setParkingInfo({})}
                />
            </MapView>
            {parkingInfo && (
            <View style={{position: 'absolute', bottom: 50, left: 10, right: 10,  height: '50%', maxHeight: 350, borderRadius: 30,  borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden'}}>
                <BlurView intensity={70}  style={{ position: 'relative', width: '100%', height: '100%', padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
                    <View>
                        <Text style={[themeStyles.text, {fontSize: 16, fontWeight: '600'}]}>Parking name</Text>
                    </View>
                    <View>
                        <Text style={[themeStyles.text, {fontSize: 14, color: 'rgb(117, 128, 138)'}]}>Via nicolo rasmo 35/17</Text>
                    </View>
                </BlurView>
            </View>                
            )}
        </SafeAreaView>
    )
}

export default MapCityParkingsScreen;