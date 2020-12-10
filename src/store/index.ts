import { applyMiddleware, combineReducers, createStore } from "redux";
import { IReduxApplicationStore } from "../models/IReduxApplicationStore";
import { CitiesReducer } from "./cities/reducer";
import ThunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = () => combineReducers<IReduxApplicationStore>({
    citiesSlice: CitiesReducer
})


function configureStore() {
    const middleware = [ThunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middleware);

    return createStore(rootReducer(), composeWithDevTools(middlewareEnhancer));
}

const store = configureStore();
export default store;

