import { ICity } from './../../models/ICity';
import { CityActionTypes, CityState } from './typings';
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";


export const fetchCities = () => {
    return (dispatch: Dispatch<any>) => {
        dispatch(fetchCitiesRequest())
    };
}

const fetchCitiesRequest: ActionCreator<ThunkAction<Promise<any>, CityState, null, any>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchCitiesStarted());

        try {
            const response: Response = await fetch("https://react-bootcamps.azurewebsites.net/api/cities");
    
            if (response.status !== 200 && response.status !== 201 && response.status !== 204) {
                dispatch(fetchCitiesFailed("There was an error fetching cities."));
            }
    
            const citiesResult = await response.json();
            dispatch(fetchCitiesSuccess(citiesResult));
            
        } catch (error) {
            dispatch(fetchCitiesFailed(error));
        }
    }
}


const fetchCitiesSuccess = (cities: ICity[]) => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_SUCCESS,
    payload: {
        cities
    }
});

const fetchCitiesStarted = () => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_STARTED
})

const fetchCitiesFailed = (errorMessage: string) => ({
    type: CityActionTypes.FETCH_BOOTCAMPS_FAILED,
    payload:{
        errorMessage
    }
})