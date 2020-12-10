import { ICity } from '../../models/ICity';
import { CityActionTypes, CityState } from './typings';


const initialCityState: CityState = {
    isFetching: false,
    errorMessage: '',
    cities: [] as ICity[]
};

export function CitiesReducer(state = initialCityState, action: {type: CityActionTypes, payload: any}): CityState {
    switch (action.type) {
        case CityActionTypes.FETCH_BOOTCAMPS_STARTED:
            return {
                ...state,
                isFetching: true
            }

        case CityActionTypes.FETCH_BOOTCAMPS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                errorMessage: '',
                cities: action.payload.cities
            }  
            
        case CityActionTypes.FETCH_BOOTCAMPS_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                isFetching: false
            }
    
        default:
            return state;
    }
}