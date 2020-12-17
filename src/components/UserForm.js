import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Button } from './Button';
import { InputField } from './InputField';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './UserForm.scss';

function UserForm() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const options = [
        'Profesija', 'Programmētajs', 'Testētajs', 'Finansists'
    ];

    const defaultOption = options[0];

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className='user-form'>
                <div className='input-form'>
                    {InputField && <InputField className='username' placeholder='Darbinieka vārds'></InputField>}
                    {InputField && <InputField className='surname' placeholder='Darbinieka uzvārds'></InputField>}
                    <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                    {InputField && <InputField className='hours' placeholder='Nostrādatas stundas par mēnesi'></InputField>}
                    {InputField && <InputField className='hours' placeholder='Alga par mēnesi'></InputField>}
                    {InputField && <InputField className='hours' placeholder='Darbinieka konts'></InputField>}
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                </div>

                <img className='user-image' src='./images/image.jpg' />

                <div className='form-buttons'>
                    {Button && <Button link='/' linkClass='new-form'>Jauna forma</Button>}
                    {Button && <Button link='/' linkClass='submit'>Submit</Button>}
                </div>
            </div>
        </>
    )
}

export default UserForm
