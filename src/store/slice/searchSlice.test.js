import reducer, {setSearchString, setSelectedLocation, addToFavorites, loadFavData} from './searchSlice';

describe('searchSlice', () => {
    const initialState = {
        "error": {"error": false, "reason": ""},
        "favorites": [],
        "locationSuggestion": [],
        "searchString": "",
        "selectedLocation": {"actualName": null, "country": null},
        "selectedLocationForecastData": null
    };
    test('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    });

    test('should set search string', () => {
        expect(reducer(initialState, setSearchString('London'))).toMatchObject({
            "searchString": "London",
        })
    })

    test('should set location selected and suggestions back to empty', () => {
        expect(reducer(initialState, setSelectedLocation('London'))).toMatchObject({"selectedLocation": "London", "locationSuggestion": []})
    })

    test('should add to favorites', () => {
        expect(reducer(initialState, addToFavorites('data'))).toMatchObject({"favorites": ["data"]})
    })

    test('should load Favorites data', () => {
        expect(reducer(initialState, loadFavData({selectedLocation:'Paris'}))).toMatchObject({"selectedLocation": "Paris"})
    })
})