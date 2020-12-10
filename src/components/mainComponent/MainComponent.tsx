import React from 'react'
import { ICity } from '../../models/ICity'

interface IMainComponent {
    selectedCity: ICity
}

export const MainComponent = (props: IMainComponent) => {
    console.log('main city', props.selectedCity)


    let cityDetails = null;

    if (props.selectedCity !== null && props.selectedCity !== undefined && Object.keys(props.selectedCity).length > 0) {
        cityDetails = (
            <React.Fragment>
                <h3>{props?.selectedCity?.cityName}</h3>
                <img src={`/images/${props?.selectedCity?.cityName.toLowerCase()}.jpg`} alt="scenerry" />
                <p>{props?.selectedCity?.summary}</p>
            </React.Fragment>
        )
    }
    return (
        <main className="col-8 main">
            {cityDetails}
        </main>
    )
}
