import { GET_WEATHER, WeatherAction, WeatherState } from "../types";

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                data: action.payload,
                loading: false,
                error: ''
            }
        default:
            return state;
    }
}