import React, {useState, useEffect} from 'react';
import './SelectInput.css'
import PropTypes from "prop-types";

const  SelectInput = ({onSelectValue,items}) => {
    const [selectValue, setSelectValue] = useState('-1');

    const onChangeHandler = (value) => {
        setSelectValue(value);
        onSelectValue(value);
    }

    return (
        <div className='sci-container'>
            <select className='select-input'
                    data-testid="select-input"
                    value={selectValue}
                    onChange={({target: {value}}) => onChangeHandler(value)}
            >

                <option value='-1' disabled >Favorites </option>
                {items && items.map((item,id) => (
                    <option key={item.selectedLocation.id} value={id}>{item.selectedLocation.name}</option>
                ))}
            </select>
        </div>
    );


};
SelectInput.propTypes = {
    items:PropTypes.array.isRequired,
    onSelectValue:PropTypes.func.isRequired
}
export default SelectInput;

