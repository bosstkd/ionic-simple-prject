export class MeteoModel {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
}
//--------------

class List{
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    visibility: number;
    pop: number;
    sys: Sys;
    dt_txt: string;
}
//---
class Main{
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
}

class Weather{
    id: number;
    main: string;
    description: string;
    icon: string;
}

class Clouds{
    all:number;
}

class Wind{
    speed:number;
    deg:number;
}

class Sys{
    pod: string;
}

//---------------
class City {
    id?:number;
    name?:string;
    coord?:Coord;
    country?:string;
    population?:number;
    timezone?:number;
    sunrise?:number;
    sunset?:number;
}
//---
class Coord{
    lat:number;
    lon:number;
}