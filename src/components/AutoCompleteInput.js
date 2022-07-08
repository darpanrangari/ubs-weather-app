import React, {useState} from "react";
import './AutoCompleteInput.css'
import PropTypes from 'prop-types'

const AutoCompleteInput = ({handleOnSearch, handleOnSelect, suggestions, placeholder}) => {
    const [searchString, setSearchString] = useState('');

    const onChangeHandler = (value) => {
        setSearchString(value)
        handleOnSearch(value)
    }

    const onSelectLocation = (value) => {
        setSearchString('')
        handleOnSelect(value)
    }

    return (
        <div className='ac-container'>
            <input type="text"
                   className="ac-input"
                   data-testid="ac-input"
                   placeholder={placeholder}
                   value={searchString}
                   onChange={({target: {value}}) => onChangeHandler(value)}
            />
            {suggestions.length > 0 && <div className='suggestion-container'>
                <ul>
                    {suggestions && suggestions.map((suggestion) => (
                        <li key={suggestion.id} onClick={() => onSelectLocation(suggestion)}>{suggestion.name}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}
AutoCompleteInput.propTypes = {
    handleOnSearch: PropTypes.func.isRequired,
    handleOnSelect: PropTypes.func.isRequired,
    suggestions: PropTypes.array.isRequired,
    placeholder:PropTypes.string
};
export default AutoCompleteInput;