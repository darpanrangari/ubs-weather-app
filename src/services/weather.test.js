import {getLocationSuggestion, getForecastForLocation} from './weather';
import { configureStore } from '@reduxjs/toolkit';
describe('geolocation', () => {
    const initialState = {
        "error": {"error": false, "reason": ""},
        "favorites": [],
        "locationSuggestion": [],
        "searchString": "",
        "selectedLocation": {"actualName": null, "country": null},
        "selectedLocationForecastData": null
    };
    const result = {
        status: 404,
        data: {},
    };
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(result),
        })
    );
    afterEach(() => {
        jest.restoreAllMocks();
    });

    beforeEach(() => {
        fetch.mockClear();
    });
    test('should return the initial state', async () => {
        const store = configureStore({
            reducer: function (state = initialState , action) {
                switch (action.type) {
                    case 'locations/getLocations/fulfilled':
                        return {...state,
                            locationSuggestion:action.payload};
                    default:
                        return state;
                }
            },
        });
        await store.dispatch(getLocationSuggestion('paris'));
        expect(fetch).toBeCalledWith("https://geocoding-api.open-meteo.com/v1/search?name=paris");

    });

    test('should return the initial state', async () => {
        const store = configureStore({
            reducer: function (state = initialState , action) {
                switch (action.type) {
                    case 'locations/getForecastForLocation/fulfilled':
                        return {...state,
                            locationSuggestion:action.payload};
                    default:
                        return state;
                }
            },
        });
        await store.dispatch(getForecastForLocation({latitude: 2.66597,longitude: 72.8851}));
        expect(fetch).toBeCalledWith("https://api.open-meteo.com/v1/forecast?latitude=2.67&longitude=72.89&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min&timezone=Europe%2FLondon");

    });
})