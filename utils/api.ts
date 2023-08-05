import { SERVER } from "./constants";

export const APILink = {
    dataset: {
        cityParkings: `${SERVER}/api/city/parkings`,
        parkingInfo: `${SERVER}/api/parking`,
        chart: {
            parkingChartDaylyCars: `${SERVER}/api/parking/chart/dayly/cars`,
        }
    }
}