export const GET_WEATHER = 'GET_WEATHER';

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface WeatherData {
    weather: any;
    base: string;
    cod: number;
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    id: number;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    sys: {
        country: string;
        id: number;
        type: number;
    };
}


export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    error: string;
}

interface GetWeatherAction {
    type: typeof GET_WEATHER;
    payload: WeatherData
}

export type WeatherAction = GetWeatherAction ;
