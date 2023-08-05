import { View } from "react-native";
import MapView,{Marker, PROVIDER_GOOGLE} from "react-native-maps";

const MapCityParkingsScreen: React.FC = () => {
    return (
        <View style={{flex: 1}}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={{height: '100%', width: '100%'}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker 
                    coordinate={{longitude: -122.4324, latitude: 37.78825}}
                    title="Daouda"
                    description="Ciao"
                />
            </MapView>
        </View>
    )
}

export default MapCityParkingsScreen;

//AIzaSyDYr6og90erYaDg44db2OJ82-hbRZTVF7o