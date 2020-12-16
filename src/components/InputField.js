import React from 'react'
import './InputField.scss'
import { Link } from 'react-router-dom';

const STYLES = ['user--input--field'];

export const InputField = ({
    content,
    placeholder,
    inputStyle
}) => {

    const checkInputStyle = STYLES.includes(inputStyle) ? inputStyle : STYLES[0];

    return (
        <input
            className={`${checkInputStyle}`}
            placeholder={placeholder}>{content}
        </input>
    )
};
