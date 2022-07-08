import { createSlice } from '@reduxjs/toolkit'
import {getLocationSuggestion, getForecastForLocation} from "../../services/weather";
import formattedForecastData from "../../utils/formatedForecastData";

const initialState = {
    searchString: '',
    selectedLocation:{
        actualName:null,
        country:null
    },
    locationSuggestion:[],
    error:{
        error: false,
        reason:''
    },
    selectedLocationForecastData:null,
    favorites:[]
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchString: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.searchString = action.payload
        },
        setSelectedLocation: (state,action) =>{
            state.selectedLocation = action.payload;
            state.locationSuggestion = [];

        },
        addToFavorites: (state,action) => {
            state.favorites.push(action.payload);
        },

        loadFavData: (state,action) =>{
            // state.selectedLocationForecastData = action.payload.selectedLocationForecastData // loding data from state but now making a new call to get updated forecast
            state.selectedLocation = action.payload.selectedLocation
        }

    },
    extraReducers:{
        [getLocationSuggestion.fulfilled]: (state, action) => {

            state.locationSuggestion = action.payload && action.payload.length > 0 && action.payload.map(({name, country, latitude, longitude,weathercode}) => {
                return {
                    id:`${latitude + longitude}`,
                    name: `${name} (${country}, latitude: ${latitude}, longitude: ${longitude})`,
                    actualName:name,
                    weatherCode:weathercode,
                    latitude,
                    longitude,
                    country,
                }
            }) || [];
        },
        [getLocationSuggestion.rejected]: (state, action) => {
            state.locationSuggestion = [];
            state.error = action.payload;
        },
        [getForecastForLocation.fulfilled]: (state, action) => {
            state.selectedLocationForecastData = formattedForecastData(action.payload.daily).slice(0,5)
            state.locationSuggestion = [];
        },
    }
})
// Action creators are generated for each case reducer function
export const { setSearchString, setSelectedLocation,addToFavorites, loadFavData } = searchSlice.actions

export default searchSlice.reducer