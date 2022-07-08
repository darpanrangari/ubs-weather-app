import React from 'react';
import SelectInput from "./SelectInput";
import { useDispatch } from 'react-redux'
import {loadFavData} from "../store/slice/searchSlice";
import {getForecastForLocation} from "../services/weather";
import './Favorites.css'
import PropTypes from "prop-types";

const Favorites = ({favorites}) => {
    const dispatch = useDispatch();

    const onSelectHandler = (value) =>{
        dispatch(loadFavData(favorites[value]))
        dispatch(getForecastForLocation(favorites[value].selectedLocation));
    }

    return (
        <div className='favorites-container'>
            <SelectInput items={favorites} onSelectValue={onSelectHandler}/>
        </div>
    );


};
Favorites.propTypes = {
    favorites:PropTypes.array.isRequired
}
export default Favorites;

