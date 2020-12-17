import React from 'react'
import './Button.scss'
import { Link } from 'react-router-dom';

const STYLES = ['btn--default', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    onClickAction,
    buttonStyle,
    buttonSize,
    link,
    linkClass
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={link} className={linkClass}>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClickAction}>
                {children}
            </button>
        </Link>
    )
};
