import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const SearchIcon: React.FC<{onClick: ()=>void}> = ({onClick}) =>{
    return (
        <View style={{position: 'absolute', bottom: 110, right: 25, zIndex: 99}}>
        <TouchableOpacity onPress={onClick} style={{width: 45, height: 45, borderRadius: 999, overflow: 'hidden', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image
                    source={{uri: "https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-22.png"}}
                    style={{borderRadius: 999, height: 25, width: 25}}

                />                        
        </TouchableOpacity>

        </View>
    )
}

export default SearchIcon;