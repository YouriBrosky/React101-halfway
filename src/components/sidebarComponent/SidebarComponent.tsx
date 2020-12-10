import React, { useEffect } from 'react'
import { ICity } from '../../models/ICity';

interface ISidebarComponent {
    selectedCityHandler: React.Dispatch<React.SetStateAction<ICity>>
    selectedCity: ICity
    allCities: ICity[]
}

export const SidebarComponent = (props: ISidebarComponent) => {
    useEffect(() => {
        props.selectedCityHandler(props.allCities[0]);

    }, [])

    const cityListItems = props.allCities.map((city: ICity) => {
        const activeClass = props?.selectedCity?.id === city.id ? 'active-city' : '';
        return <li key={city.id} onClick={() => props.selectedCityHandler(city)} className={activeClass} >{city.cityName}</li>;
    });

    return (
        <aside className="col-4 sidebar">
            <ul>{cityListItems}</ul>
        </aside>
    )
}
