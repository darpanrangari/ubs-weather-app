import React from "react";
import './App.css';
import GeoSearchBox from "./components/GeoSearchBox";
import Favorites from "./components/Favorites";
import Forecast from "./components/Forecast";
import {useSelector, useDispatch} from 'react-redux'
import {addToFavorites} from "./store/slice/searchSlice";
import Home from './components/Home'

const App = () => {
    const forecastData = useSelector((state) => (
        {
            selectedLocationForecastData: state.search.selectedLocationForecastData,
            selectedLocation: state.search.selectedLocation,
            favorites: state.search.favorites
        }
    ))
    const dispatch = useDispatch();

    const onAddToFavoritesHandler = (favData) => {
        dispatch(addToFavorites(favData))
    }

    return (
        <div className="App">
            <header><span>MY FORECAST</span></header>
            <div className="forecast-container">
                <div className="forecast-controls">
                    <GeoSearchBox/>
                    <Favorites favorites={forecastData.favorites}/>
                </div>
                {forecastData.selectedLocationForecastData ?
                    <Forecast onAddToFavorites={onAddToFavoritesHandler} forecastData={forecastData}/> : <Home/>}
            </div>
        </div>
    );
}

export default App;
