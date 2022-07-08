import {screen} from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import GeoSearchBox from './GeoSearchBox';

describe('GeoSearchBox', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {

        renderWithProviders(<GeoSearchBox/>, {
            preloadedState: {
                search: {
                    error: {
                        error: true,
                        reason: 'bla bla error'
                    },
                    locationSuggestion: []
                }
            }
        })
    })

    test('favorites dropdown to be present in the dom', () => {
        expect(screen.getByTestId('ac-input')).toBeInTheDocument();
    });

    test('on error', async () => {
        expect(screen.getByText(/bla bla error/i)).toBeInTheDocument()
    });


})

