import { BlurView } from "expo-blur";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import { themeStyles } from "../styleSheet/theme";
import { ICityParkingData } from "../types/index.d";
import { useEffect } from "react";
import { dataFetch } from "../api";
import { calculateCoordinateDelta } from "../utils/map";
import SearchParking from "../components/SearchParking";
import SearchIcon from "../components/SearchIcon";
import { mapMakerIconEcharge, mapeMakerIconGreen, mapeMakerIconRed, mapeMakerIconYellow } from "../utils/constants";
import Chart from "../components/Chart";

const MapCityParkingsScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    
    const [cityParkings, setCityParkings] = useState<ICityParkingData[]>([]);
    const [parkingInfo, setParkingInfo] = useState<ICityParkingData | null>(null);
    const [echarges, setEcharges] = useState<any[]>([]);
    const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
    const [activeSearch, setActiveSearch] = useState<boolean>(false);
    let initialRegion: Region | undefined;

    if(cityParkings.length > 0) {
        const { 
            deltaLatitude,
            deltaLongitude,
         } = calculateCoordinateDelta(cityParkings);

        initialRegion = {longitude: cityParkings[0].x, latitude: cityParkings[1].y, longitudeDelta: deltaLongitude, latiduteDelta: deltaLatitude} as any;
    }

    const fetchParkings = async () => {
        const data = await dataFetch.city.parkings(route.params.cityData.key);
        console.log(data);
        if(!data.parkings) return;
        setCityParkings(prev=>([...data.parkings]));
        fetchEcharges();
    }

    const getCounterColor = (parking: ICityParkingData) => {
        if(parking.mvalue === 0) return 'red';
        if(parking.mvalue <= parking.capacity/2) return 'orange';
        return 'green';
    }

    const handleSearchParkingSelect = (parking: ICityParkingData) => {
        setActiveSearch(false);
        setParkingInfo(parking)
        
    }

    const fetchEcharges = async() => {
        const data = await dataFetch.echarges();
        if(!data.echarges) return;
        setEcharges(data.echarges.slice(0, 50));
    }

    useEffect(()=>{
        fetchParkings();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, position: 'relative' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%', width: '100%' }}
                initialRegion={ initialRegion }
                onPress={() => parkingInfo && setParkingInfo(null)}
            >
                {cityParkings.map(parking => {
                    const makerIcon = (()=> {
                        if(parking.mvalue === 0) return mapeMakerIconRed
                        if(parking.capacity/2 <= parking.mvalue) return mapeMakerIconYellow
                        return mapeMakerIconGreen
                    })();

                    return (
                    <Marker
                        key={parking.scode}
                        coordinate={{ longitude: parking.x, latitude: parking.y }}
                        title={parking.name_en}
                        onPress={() => setParkingInfo(parking)}
                        
                    >
                        <Image source={makerIcon} style={{width: 50, height: 50}}/>
                    </Marker> 
                    )         
                })}

                {echarges.map(echarge => 
                    <Marker 
                        key={echarge.scode}
                        coordinate={{ longitude: echarge.x, latitude: echarge.y }}
                        title={echarge.sname}
                    >
                         <Image source={mapMakerIconEcharge} resizeMode="contain" style={{width: 50, height: 50}}/>
                    </Marker>
                )}

            </MapView>
            {parkingInfo && (
                <View style={{ position: 'absolute', bottom: 50, top: showMoreInfo ? 50 : undefined, left: 10, right: 10, height: showMoreInfo ? undefined : '50%', maxHeight: showMoreInfo ? undefined : 300, borderRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden' }}>
                    <BlurView intensity={270} style={{ position: 'relative', width: '100%', height: '100%', padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                        
                        <TouchableOpacity onPress={()=>setParkingInfo(null)} style={{position: 'absolute', top: 15, right: 15, zIndex: 20}}>
                            <Image 
                                source={{uri: "https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png"}}
                                style={{width: 35, height: 35}}
                    
                            />
                        </TouchableOpacity>
                        <ScrollView scrollEnabled={showMoreInfo}>
                            <View>
                                <Text style={[themeStyles.text, { fontSize: 16, fontWeight: '600' }]}>{parkingInfo.name_en}</Text>
                            </View>
                            <View>
                                <Text style={[themeStyles.text, { fontSize: 14, color: 'rgb(117, 128, 138)' }]}>Via nicolo rasmo 35/17</Text>
                            </View>

                            <View style={{ width: '100%', marginTop: 15, flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={{ width: '100%', maxWidth: 250, height: 80, borderRadius: 40, backgroundColor: getCounterColor(parkingInfo), overflow: 'hidden', display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}
                                    onPress={() => /*navigation.navigate(ScreensName.ParkingInfo, parkingInfo)*/ {}}
                                >
                                    <View style={{ width: '50%', borderRightWidth: 2, borderRightColor: 'rgba(255, 255, 255, 0.5)' }}>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontWeight: '600' }]}>{parkingInfo.mvalue}</Text>
                                        </View>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontSize: 12 }]}>Disponibili</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <View>
                                            <Text style={[themeStyles.text, { textAlign: 'center', color: '#fff', fontSize: 13 }]}>{parkingInfo.capacity-parkingInfo.mvalue}</Text>
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

                            {showMoreInfo && (
                                <View style={{width: '100%', marginTop: 30, borderRadius: 20, overflow: 'hidden'}}>
                                    <Chart scope={parkingInfo.scode} />
                                </View>
                            )}
                            

                        </ScrollView>
                    </BlurView>
                </View>
            )}

            {activeSearch && (
                <SearchParking onInfo={handleSearchParkingSelect} parkings={cityParkings} onClose={()=>setActiveSearch(false)}/>
            )}

            {!(activeSearch || parkingInfo) && (
                <SearchIcon onClick={()=>setActiveSearch(true)} />
            )}
            
        </SafeAreaView>
    )
}

export default MapCityParkingsScreen;