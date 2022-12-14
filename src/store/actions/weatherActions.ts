import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, GET_WEATHER } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async (dispatch: (arg0: { type: string; payload: WeatherData; }) => void) => {
        try {
            const API_KEY = '623100723e0f4ed36134e546cb17c6db';
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);

            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData
            });
        } catch (err) {
            console.log(err);
        }
    }
}
