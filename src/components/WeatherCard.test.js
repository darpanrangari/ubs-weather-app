import {screen} from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import WeatherCard from './WeatherCard';

describe('Weather Card', () => {

    const data = {
        day: '2022-07-10', maxTemp: 27.9, weatherCode: 96, minTemp: 27.2, aprMaxTemp: 30.8, aprMinTemp: 29.5
    }

    beforeEach(() => {
        renderWithProviders(<WeatherCard data={data}/>)
    })

    test('if passed data present', () => {
        expect(screen.getByText('10 July')).toBeInTheDocument()
        expect(screen.getByText(/min temp: 27.2/i)).toBeInTheDocument()
        expect(screen.getByText(/max temp: 27.9/i)).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src',"wi-storm-showers.svg")
    });
})

