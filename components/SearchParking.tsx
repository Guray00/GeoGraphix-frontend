import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ICityParkingData } from "../types";
import { BlurView } from "expo-blur";
import { themeStyles } from "../styleSheet/theme";
import { useState } from "react";
import InputParking from "./InputParking";



const SearchParking: React.FC<{parkings: ICityParkingData[], onClose: ()=>void, onInfo: (parking: ICityParkingData)=>void}> = ({parkings, onClose, onInfo}) => {
    const [search, setSearch] = useState<string>('');
    const parkingsFiltered = search.trim().length > 0 ?  parkings.filter(parking => parking.name_en.toLowerCase().includes(search?.toLowerCase())) : parkings;
    return (
        <View style={{ position: 'absolute', bottom: 50, top: 50, left: 10, right: 10, borderRadius: 30, borderTopLeftRadius: 30, borderTopRightRadius: 30, overflow: 'hidden' }}>
        <BlurView intensity={270} style={{ position: 'relative', width: '100%', height: '100%', padding: 20, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <TouchableOpacity onPress={onClose} style={{position: 'absolute', top: 15, right: 15, zIndex: 20}}>
                <Image 
                    source={{uri: "https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png"}}
                    style={{width: 35, height: 35}}
                    
                />
            </TouchableOpacity>
            <View>
                <InputParking 
                    onChange={(text)=>setSearch(text)}
                />
            </View>            
            <ScrollView scrollEnabled={true}>
                {parkingsFiltered.map(parking => (
                <TouchableOpacity 
                    key={`search-${parking.scode}`}
                    style={{width: '100%', backgroundColor: '#fff', padding: 15, borderRadius: 30, marginBottom: 15, display: 'flex', flexDirection: 'row', alignItems: 'center'}}
                    onPress={()=>onInfo(parking)}
                >
                    <View style={{marginRight: 6}}>
                        <Image 
                            source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Parking_icon.svg/256px-Parking_icon.svg.png"}}
                            style={{width: 25, height: 25}}
                        />
                    </View>
                    <Text style={[themeStyles.text, {fontWeight: '600'}]}>{parking.name_en}</Text>
                </TouchableOpacity>                    
                ))}

                {parkingsFiltered.length === 0 && (
                    <View>
                        <Text style={[themeStyles.colorSecondary]}>Parking not found</Text>
                    </View>
                )}

            </ScrollView>
        </BlurView>
    </View>
    )
}

export default SearchParking;