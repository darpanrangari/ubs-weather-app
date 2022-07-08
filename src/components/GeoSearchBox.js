import React from 'react';
import './GeoSearchBox.css'
import debounce from "../utils/debounce";
import { useSelector, useDispatch } from 'react-redux'
import {setSearchString, setSelectedLocation} from "../store/slice/searchSlice";
import {getLocationSuggestion, getForecastForLocation} from '../services/weather'
import AutoCompleteInput from './AutoCompleteInput';

const GeoSearchBox = () => {
    const { locationSuggestion,error:{error,reason}} = useSelector((state) => state.search)

    const dispatch = useDispatch();

    const handleOnSearch = (searchVal) => {
        dispatch(setSearchString(searchVal));
        if(searchVal.length){
            debounce(() => dispatch(getLocationSuggestion(searchVal)))();
        }
    }

    const handleOnSelect = (selectedLocation) => {
        // the item selected
       dispatch(setSelectedLocation(selectedLocation));
       dispatch(getForecastForLocation(selectedLocation));
    }
    const debounceInputChange = debounce((val) => handleOnSearch(val));

    return (
        <div className='search-container'>
            {error && reason && <p className='error'>{reason}</p>}
            <AutoCompleteInput
                placeholder='Search for the location'
                handleOnSearch={debounceInputChange}
                handleOnSelect={handleOnSelect}
                suggestions={locationSuggestion}
            />
        </div>
    );


};
export default GeoSearchBox;

