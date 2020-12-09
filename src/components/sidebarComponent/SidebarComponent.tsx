import React, { useEffect } from 'react'
import cities from "../../assets/data/bootcamps.json";
import { ICity } from '../../models/ICity';

interface ISidebarComponent {
    selectedCityHandler: React.Dispatch<React.SetStateAction<ICity>>
    selectedCity: ICity
}

export const SidebarComponent = (props: ISidebarComponent) => {


    useEffect(() => {
        props.selectedCityHandler(cities.cities[0]);

    }, [])

    const cityListItems = cities.cities.map((city: ICity) => {
        const activeClass = props.selectedCity.id === city.id ? 'active-city' : '';
        return <li onClick={() => props.selectedCityHandler(city)} className={activeClass} >{city.cityName}</li>;
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    )
}
