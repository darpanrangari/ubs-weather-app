import React from 'react';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import './WeatherCard.css'
import getImageByKey from "../utils/imageMapping";
import PropTypes from "prop-types";

dayjs.extend(customParseFormat);

const WeatherCard = ({data}) => {
    const {day, minTemp, maxTemp, weatherCode} = data;

    const formattedDate = dayjs(day, 'YYYY-MM-DD').format('D MMMM')

    const weatherCodeImage = getImageByKey(weatherCode);

    return (
        <div className="weather-card">
            <h3>{formattedDate}</h3>
            <section className="image-container">
                <img src={weatherCodeImage} style={{width: '100%'}} alt='weather image'/>
            </section>
            <section className="param-container">
                <p>min temp: <br/> {minTemp}°C</p>
                <p>max temp: <br/> {maxTemp}°C</p>
            </section>
        </div>
    );


};
WeatherCard.propTypes = {
    data:PropTypes.object.isRequired
}
export default WeatherCard;

