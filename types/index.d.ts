export enum ScreensName {
    Login = "Login",
    SignUp = "SignUp",
    Home = "Home",
    MapCityParkings = "MapCityParkings",
}

export interface ICityData {
    key: string;
    name: string;
    flag: string;
}


export interface ICityParkingData {
    name_en: string;
    capacity: number;
    mvalue: number;
    x: number;
    y: numnber;
    scode: string;
}

export interface ParkingCarsTimes{
    mvalidtime: number;
    mvalue: number;
}