import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { themeStyles } from "../styleSheet/theme";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { BlurView } from "expo-blur";
import { ScreensName } from "../types/index.d";

const HomeScreen: React.FC<{ route: any, navigation: any }> = ({ route, navigation }) => {
    
    const cities = [
        {
            name: 'Bolzano',
            flag: 'https://www.novalibandiere.it/wp-content/uploads/bolzano-provincia.gif'
        },
        {
            name: 'Merano',
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/ITA_Merano_COA.svg/816px-ITA_Merano_COA.svg.png"
        },
        {
            name: 'Rovereto',
            flag: 'https://www.comune.rovereto.tn.it/var/opencityrovereto/storage/images/1298-302-ita-IT/Comune-di-Rovereto_header_logo.png'
        },
        {
            name: 'Trento',
            flag: 'https://www.novalibandiere.it/wp-content/uploads/trento.gif',
    }];

    const handleBtnPress = () => {
        navigation.navigate(ScreensName.MapCityParkings, {cityId: "__CITY_ID_HERE__"})
    }

    return (
        <SafeAreaView style={{ flex: 1, flexGrow: 1, position: 'relative' }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%', width: '100%', flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}
            />
            <View style={{ position: 'absolute', top: 0, bottom: 0, width: '100%', height: '100%' }}>
                <BlurView intensity={35} style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{marginBottom: 20}}>
                    <Image 
                        source={{uri: "https://img.freepik.com/free-psd/3d-rendering-gps-travel-icon_23-2149389115.jpg?t=st=1691202128~exp=1691202728~hmac=9acaa5cb11452f23d9e10f0f73de4b6538b44a0f55ea7bd5839b2a26c76734d0"}}
                        height={120}
                        width={120}
                        style={{borderRadius: 999}}
                    />
                </View>
                    {cities.map(city => (
                        <TouchableOpacity 
                            key={city.name} 
                            style={{ borderRadius: 30, padding: 15, paddingTop: 15, paddingBottom: 15, width: '90%', maxWidth: 300, backgroundColor: '#fff', marginBottom: 20 }}
                            onPress={handleBtnPress}
                        >
                            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                                <Image
                                    source={{ uri: city.flag }}
                                    resizeMode="contain"
                                    height={25}
                                    width={25}
                                    style={{ marginRight: 10 }}
                                />
                                <Text style={[themeStyles.text, { fontSize: 24, fontWeight: '600', textAlign: 'center' }]}>
                                    {city.name}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    ))}
                </BlurView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;