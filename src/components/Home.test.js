import {screen} from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import Home from './Home';

describe('Weather Card', () => {

    beforeEach(() => {
        renderWithProviders(<Home/>)
    })

    test('if passed data present', () => {
        expect(screen.getByText('Welcome to MY FORECAST page !')).toBeInTheDocument()
        expect(screen.getByText(/You can easily check the weather forecast for any location in the world./i)).toBeInTheDocument()
        expect(screen.getByText(/Just search for it or select location from the favorite list/i)).toBeInTheDocument()

    });
})

