import {screen} from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import Forecast from './Forecast';
import userEvent from '@testing-library/user-event'

describe('Forecast', () => {

    const forecastData = {
        selectedLocationForecastData: [
            {
                day: '2022-07-08',
                maxTemp: 27.9,
                weatherCode: 96,
                minTemp: 27,
                aprMaxTemp: 32.4,
                aprMinTemp: 31.2
            },
            {
                day: '2022-07-09',
                maxTemp: 28,
                weatherCode: 95,
                minTemp: 27.4,
                aprMaxTemp: 32,
                aprMinTemp: 30.1
            }],
        selectedLocation: {
            id: '75.56512',
            name: 'Kudahuvadhoo (Maldives, latitude: 2.67075, longitude: 72.89437)',
            actualName: 'Kudahuvadhoo',
            latitude: 2.67075,
            longitude: 72.89437,
            country: 'Maldives'
        },
        favorites: []
    }
    const mockFun = jest.fn()
    beforeEach(() => {
    })

    test('if passed data present', () => {
        renderWithProviders(<Forecast forecastData={forecastData} onAddToFavorites={mockFun}/>)
        expect(screen.getByText('9 July')).toBeInTheDocument()
        expect(screen.getByText(/min temp: 27.4/i)).toBeInTheDocument()
        expect(screen.getByText(/max temp: 28/i)).toBeInTheDocument()
    });

    test('if addToFavoraites callback is called', () => {
        renderWithProviders(<Forecast forecastData={forecastData} onAddToFavorites={mockFun}/>)
        userEvent.click(screen.getByTestId('fav-btn'))
        expect(mockFun).toHaveBeenCalledWith( {"favorites": [], "selectedLocation": {"actualName": "Kudahuvadhoo", "country": "Maldives", "id": "75.56512", "latitude": 2.67075, "longitude": 72.89437, "name": "Kudahuvadhoo (Maldives, latitude: 2.67075, longitude: 72.89437)"}, "selectedLocationForecastData": [{"aprMaxTemp": 32.4, "aprMinTemp": 31.2, "day": "2022-07-08", "maxTemp": 27.9, "minTemp": 27, "weatherCode": 96}, {"aprMaxTemp": 32, "aprMinTemp": 30.1, "day": "2022-07-09", "maxTemp": 28, "minTemp": 27.4, "weatherCode": 95}]})
        expect(screen.getByText(/2.67075/i)).toBeInTheDocument()
        expect(screen.getByText(/72.89437/i)).toBeInTheDocument()

    });

    test('if already favorites then show message', () =>{
        const newState = {
            ...forecastData,
            favorites: [
                {
                    selectedLocationForecastData: [
                        {
                            day: '2022-07-08',
                            maxTemp: 27.9,
                            weatherCode: 96,
                            minTemp: 27,
                            aprMaxTemp: 32.4,
                            aprMinTemp: 31.2
                        },
                        {
                            day: '2022-07-09',
                            maxTemp: 28,
                            weatherCode: 95,
                            minTemp: 27.4,
                            aprMaxTemp: 32,
                            aprMinTemp: 30.1
                        },
                        {
                            day: '2022-07-10',
                            maxTemp: 27.9,
                            weatherCode: 96,
                            minTemp: 27.2,
                            aprMaxTemp: 30.8,
                            aprMinTemp: 29.5
                        },
                        {
                            day: '2022-07-11',
                            maxTemp: 28.5,
                            weatherCode: 95,
                            minTemp: 27.7,
                            aprMaxTemp: 31.4,
                            aprMinTemp: 29.2
                        },
                        {
                            day: '2022-07-12',
                            maxTemp: 28.4,
                            weatherCode: 80,
                            minTemp: 27.3,
                            aprMaxTemp: 33.5,
                            aprMinTemp: 31.2
                        }
                    ],
                    selectedLocation: {
                        id: '75.56512',
                        name: 'Kudahuvadhoo (Maldives, latitude: 2.67075, longitude: 72.89437)',
                        actualName: 'Kudahuvadhoo',
                        latitude: 2.67075,
                        longitude: 72.89437,
                        country: 'Maldives'
                    },
                    favorites: []
                }
            ]
        }

        renderWithProviders(<Forecast forecastData={newState} onAddToFavorites={mockFun}/>)
        expect(screen.getByText(/Added to Favorites/i)).toBeInTheDocument()
    })


})

