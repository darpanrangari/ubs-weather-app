import {screen} from '@testing-library/react';
import {renderWithProviders} from "../utils/testUtils";
import userEvent from '@testing-library/user-event'
import SelectInput from './SelectInput';


describe('SelectInput', () => {
    const onSelectValue = jest.fn();
    const favorites = [{
        selectedLocation: {
            id: '75.56512',
            name: 'london',
        }
    },
        {
            selectedLocation: {
                id: '333',
                name: 'zurich',
            }
        }]
    jest.mock('react-redux', () => ({
        useSelector: jest.fn(),
    }));
    beforeEach(() => {

        renderWithProviders(<SelectInput items={favorites} onSelectValue={onSelectValue}/>)
    })

    test('favorites dropdown to be present in the dom', () => {
        expect(screen.getByTestId('select-input')).toBeInTheDocument();
    });

    test('on select favorites callback is called', async () => {
        await userEvent.selectOptions(screen.getByTestId('select-input'),['zurich']);
        expect(onSelectValue).toHaveBeenCalledWith("1")

    });
})

