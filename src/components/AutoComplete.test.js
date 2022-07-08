import { screen } from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import userEvent from '@testing-library/user-event'
import AutoCompleteInput from './AutoCompleteInput';

describe('AutoCompleteInput',() => {
    const mockDispatch = jest.fn();
    const handleOnSearch = jest.fn();
    const handleOnSelect = jest.fn();
    jest.mock('react-redux', () => ({
        useSelector: jest.fn(),
        useDispatch: () => mockDispatch
    }));
    beforeEach(() =>{
        const suggestions = [{
            id:0,
            name:'abc'
        },{
            id:1,
            name:'xyz'
        },{
            id:2,
            name:'pqr'
        }]
        renderWithProviders(<AutoCompleteInput suggestions={suggestions} handleOnSearch={handleOnSearch} handleOnSelect={handleOnSelect}/>)
    })

    test('favorites dropdown to be present in the dom', () => {
        expect(screen.getByTestId('ac-input')).toBeInTheDocument();
    });

    test('on performing location search', async () => {
        userEvent.type(screen.getByTestId('ac-input'), 'abc')
        expect(await screen.findByText('abc')).toBeInTheDocument();
        expect(handleOnSearch).toHaveBeenCalledWith('abc')

        userEvent.click(await screen.findByText('abc'))
        expect(handleOnSelect).toHaveBeenCalledWith( {"id": 0, "name": "abc"})

    });
})

