import React, { Fragment, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Button } from './Button';
import { InputField } from './InputField';
import "react-datepicker/dist/react-datepicker.css";
import './styles/UserForm.scss';

function UserForm() {
    const options = [
        'Profesija', 'Programmētajs', 'Testētajs', 'Finansists'
    ];
    const position = options[0];
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [working_hours, setHours] = useState('');
    const [salary, setSalary] = useState('');
    const [bank_account, setAccount] = useState('');
    const [department_name, setDepartment] = useState('');

    const reload = () => {
        window.location.reload();
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const position = document.getElementsByClassName("is-selected").item(0).innerHTML;
            const body = {name, surname, position, working_hours, salary, bank_account, department_name};
            const response = await fetch('http://localhost:5000/worker', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            console.log(response)
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <form className='user-form' onSubmit={onSubmitForm}>
                <div className='input-form'>
                    {InputField && <InputField className='username' placeholder='Vārds' valueData={name} onChange={e => setName(e.target.value)}></InputField>}
                    {InputField && <InputField className='surname' placeholder='Uzvārds' valueData={surname} onChange={e => setSurname(e.target.value)}></InputField>}
                    <Dropdown options={options} value={position} placeholder="Select an option" />
                    {InputField && <InputField className='hours' placeholder='Darba stundas' valueData={working_hours} onChange={e => setHours(e.target.value)}></InputField>}
                    {InputField && <InputField className='salary' placeholder='Alga' valueData={salary} onChange={e => setSalary(e.target.value)}></InputField>}
                    {InputField && <InputField className='account' placeholder='Bankas konts' valueData={bank_account} onChange={e => setAccount(e.target.value)}></InputField>}
                    {InputField && <InputField className='department' placeholder='Nodaļa' valueData={department_name} onChange={e => setDepartment(e.target.value)}></InputField>}
                </div>

                <img className='user-image' src='./images/image.jpg' alt=''/>

                <div className='form-buttons'>
                    {Button && <Button link='/' className='new-form' onClick={reload}>Jauna forma</Button>}
                    {Button && <Button className='submit' type='submit'>Submit</Button>}
                </div>
            </form>
        </Fragment>
    )
}

export default UserForm
