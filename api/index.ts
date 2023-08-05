import { ICityParkingData } from "../types"
import { APILink } from "../utils/api"

async function fetchCityParkings(city: string){
    console.log('ciao')
    const parkings =  await fetch(`${APILink.dataset.cityParkings}?municipality=${city}`)
    .then(response => response.json())
    .then( (parkings: ICityParkingData[]) => parkings)
    .catch(error => {
        console.log(error);
        return [];
    })

    return {parkings};
}

async function fetchParking(scode: string){
    const parking =  await fetch(`${APILink.dataset.parkingInfo}?scode=${scode}`)
    .then(response => response.json())
    .then( (parking: ICityParkingData) => parking)
    .catch(error => {
        console.log(error);
        return [];
    })

    return {parking};
}

async function fetchChartParkingDaylyCars(scode: string){
    const chart =  await fetch(`${APILink.dataset.chart.parkingChartDaylyCars}?scode=${scode}`)
    .then(response => response.json())
    .then( (chart: ICityParkingData) => chart)
    .catch(error => {
        console.log(error);
        return [];
    })

    return {chart};
}

async function fetchEcharges(){
    const echarges =  await fetch(`${APILink.dataset.echarges}`)
    .then(response => response.json())
    .then( (echarges: any[]) => echarges)
    .catch(error => {
        console.log(error);
        return [];
    })

    return {echarges};
}

export const dataFetch = {
    city: {
        parkings: fetchCityParkings ,
    },
    parking: fetchParking,
    chart: {
        parkingDaylyCars: fetchChartParkingDaylyCars ,
    },
    echarges: fetchEcharges
}