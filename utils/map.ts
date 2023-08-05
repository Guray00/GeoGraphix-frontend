import { ICityParkingData } from "../types";
import { mapeMakerIconGreen, mapeMakerIconRed, mapeMakerIconYellow } from "./constants";

export function calculateCoordinateDelta (parkings: ICityParkingData[]){
    let maxLongitude = parkings[0].x;   
    let maxLatitude = parkings[0].y;
    
    let minLongitude = parkings[0].x;
    let minLatitude = parkings[0].y;


    for (let tmp of parkings){
        if (maxLongitude < tmp.x){
            maxLongitude = tmp.x;
        }

        if(maxLatitude < tmp.y){
            maxLatitude = tmp.y;
        }

        if (minLongitude > tmp.x){
            minLongitude = tmp.x;
        }

        if (maxLatitude > tmp.y){
            minLatitude = tmp.y;
        }
    }

    const centerLatitude = (maxLatitude + minLatitude)/2;
    const centerLongitude = (maxLongitude + minLongitude)/2;

    const deltaLongitude = Math.sqrt( Math.pow(maxLongitude - minLongitude, 2) + Math.pow(maxLongitude - minLongitude, 2) )
    const deltaLatitude = Math.sqrt( Math.pow(maxLatitude - minLatitude, 2) + Math.pow(maxLatitude - minLatitude, 2) )

    return {
        centerLatitude,
        centerLongitude,
        deltaLatitude,
        deltaLongitude,
    }
}

export function getMapMakerIcon (parking: ICityParkingData) {

        if(parking.mvalue === 0) return mapeMakerIconRed;
        if(parking.mvalue <= parking.capacity/2) return mapeMakerIconYellow
        return mapeMakerIconGreen
    
}
