import { ICity } from "./../../models/ICity";

export enum CityActionTypes {
    FETCH_BOOTCAMPS_STARTED = "FETCH_BOOTCAMPS_STARTED",
    FETCH_BOOTCAMPS_SUCCESS = "FETCH_BOOTCAMPS_SUCCESS",
    FETCH_BOOTCAMPS_FAILED = "FETCH_BOOTCAMPS_FAILED", 
}

export type CityState = Readonly<
    {
        cities: ICity[];
        errorMessage: string;
        isFetching: boolean;
    }>