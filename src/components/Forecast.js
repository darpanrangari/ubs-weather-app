import React from 'react';
import WeatherCard from "./WeatherCard";
import './Forecast.css'
import PropTypes from 'prop-types'

const Forecast = ({forecastData, onAddToFavorites}) => {
    const {selectedLocation, selectedLocationForecastData: data} = forecastData
    const search = (nameKey, myArray,prop) => {
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].selectedLocation[prop] === nameKey) {
                return true;
            }
        }
        return false;
    }
    const {actualName, country, latitude, longitude} = selectedLocation;
    const isItemAlreadyInFav = search(actualName,forecastData.favorites,'actualName')
    return (
        <div className="forecast-body">
            <div className='forecast-subheader'>
                <div>
                    {actualName && <h1> {actualName} ({country})</h1>}
                    <span>Latitude: {latitude}</span> <span>Longitude: {longitude}</span>
                </div>

                {!isItemAlreadyInFav ? <button data-testid="fav-btn" onClick={() => onAddToFavorites(forecastData)}> Add to favorites</button> : <strong>Added to Favorites</strong>}
            </div>
            <section className='forecast-section'>
                {data && data.map((dayData) => (
                    <WeatherCard key={dayData.day} data={dayData}/>
                ))}
            </section>
        </div>
    );


};
Forecast.propTypes = {
    forecastData:PropTypes.object.isRequired,
    onAddToFavorites:PropTypes.func.isRequired
}
export default Forecast;

