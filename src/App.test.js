import { screen } from '@testing-library/react';
import {renderWithProviders} from "./utils/testUtils";
import userEvent from '@testing-library/user-event'
import App from './App';

describe('check app layout and functionality',() => {
  beforeEach(() =>{
    renderWithProviders(<App />)
  })
  test('renders learn react link', () => {
    expect(screen.getByText(/Welcome to MY FORECAST page/i)).toBeInTheDocument();
  });

  test('search input to be present in the dom', () => {
    expect(screen.getByTestId('ac-input')).toBeInTheDocument();
  });

  test('favorites dropdown to be present in the dom', () => {
    expect(screen.getByTestId('ac-input')).toBeInTheDocument();
  });

  test('on performing location search', async () => {
      userEvent.type(screen.getByTestId('ac-input'), 'londo')
      expect(await screen.findByText('London (United Kingdom, latitude: 51.50853, longitude: -0.12574)')).toBeInTheDocument();
  });
})

