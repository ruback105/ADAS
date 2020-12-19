import React from 'react'
import './styles/InputField.scss'

const STYLES = ['user--input--field'];

export const InputField = ({
    placeholder,
    inputStyle,
    onChange,
    valueData
}) => {

    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

    return (
        <input
            className={`${checkInputStyle}`}
            placeholder={placeholder}
            value={valueData}
            onChange={onChange}>
        </input>
    )
};
