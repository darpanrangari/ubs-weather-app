import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLocationSuggestion = createAsyncThunk(
    "locations/getLocations", async (location) => {
       try{
           const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)

           const {results} = await response.json();

           return results
       }catch (err){
           return err
       }
    }
);

export const getForecastForLocation = createAsyncThunk(
    "locations/getForecastForLocation", async (selectedLocation) => {
        const {latitude, longitude} = selectedLocation;
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude.toFixed(2)}&longitude=${longitude.toFixed(2)}&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=Europe%2FLondon`)

        const data = await response.json();

        return data
    }
);

