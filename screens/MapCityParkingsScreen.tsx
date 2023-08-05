import { BlurView } from "expo-blur";
import { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { themeStyles } from "../styleSheet/theme";
import { ScreensName } from "../types/index.d";

const MapCityParkingsScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    const [parkingInfo, setParkingInfo] = useState<{} | null>(null);
    const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

    return (
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%', width: '100%' }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={() => parkingInfo && setParkingInfo(null)}
            >
                <Marker
                    coordinate={{ longitude: -122.4324, latitude: 37.78825 }}
                    title="Daouda"
                    description="Ciao"
                    onPress={() => setParkingInfo({})}
                />
            </MapView>
            {parkingInfo && (
                <View style={{ position: 'absolute', bottom: 50, top: showMoreInfo ? 50 : undefined, left: 10, right: 10, height: showMoreInfo ? undefined : '50%', maxHeight: showMoreInfo ? undefined : 300, borderRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden' }}>
                    <BlurView intensity={270} style={{ position: 'relative', width: '100%', height: '100%', padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        <View style={{position: 'absolute', top: 15, right: 15}}>

                        </View>
                        <ScrollView scrollEnabled={showMoreInfo}>
                            <View>
                                <Text style={[themeStyles.text, { fontSize: 16, fontWeight: '600' }]}>Parking name</Text>
                            </View>
                            <View>
                                <Text style={[themeStyles.text, { fontSize: 14, color: 'rgb(117, 128, 138)' }]}>Via nicolo rasmo 35/17</Text>
                            </View>

                            <View style={{ width: '100%', marginTop: 15, flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ width: '100%', maxWidth: 250, height: 80, borderRadius: 40, backgroundColor: 'orange', overflow: 'hidden', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                                    onPress={() => navigation.navigate(ScreensName.ParkingInfo, parkingInfo)}
                                >
                                    <View style={{ width: '50%', borderRightWidth: 2, borderRightColor: 'rgba(255, 255, 255, 0.5)' }}>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontWeight: '600' }]}>456</Text>
                                        </View>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontSize: 12 }]}>Disponibili</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontSize: 13 }]}>456</Text>
                                        </View>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontSize: 12 }]}>Occupati</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            {!showMoreInfo && (
                                <TouchableOpacity onPress={() => setShowMoreInfo(true)} style={{ width: '100%', marginTop: 10 }}>
                                    <Text style={[themeStyles.text, themeStyles.colorSecondary, { textAlign: 'center', color: 'rgb(29, 155, 240)' }]}>Show more</Text>
                                </TouchableOpacity>
                            )}

                        </ScrollView>
                    </BlurView>
                </View>
            )}
        </SafeAreaView>
    )
}

export default MapCityParkingsScreen;