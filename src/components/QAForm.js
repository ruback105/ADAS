import React, { Fragment, useState } from 'react';
import './styles/QAForm.scss';
import { Button } from './Button';
import { InputField } from './InputField';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function QAForm() {
    const [website_name, setWebsite] = useState('');
    const [test_name, setName] = useState('');
    const [script_path, setPath] = useState('');
    const [test_schedule, setSchedule] = useState('');
    const [test_case, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const reload = () => {
        window.location.reload();
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const test_case = document.querySelector('.DraftEditor-editorContainer span[data-text="true"]').textContent;
            const body = { website_name, test_name, test_case, script_path, test_schedule };
            const response = await fetch('http://localhost:5000/auto-qa', {
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
            <form className='qa-form' onSubmit={onSubmitForm}>
                <div className='input-form'>
                    {InputField && <InputField
                        className='test--name'
                        placeholder='Website'
                        valueData={website_name}
                        onChange={e => setWebsite(e.target.value)}>
                    </InputField>}
                    {InputField && <InputField
                        className='test--name'
                        placeholder='Test name'
                        valueData={test_name}
                        onChange={e => setName(e.target.value)}>
                    </InputField>}
                    <Editor
                        editorState={test_case}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="user--input--field test--case"
                        editorClassName="editor"
                        toolbarClassName="toolbar"
                        placeholder='Test case'
                    />
                    {InputField && <InputField
                        className='test--path'
                        placeholder='Test path'
                        valueData={script_path}
                        onChange={e => setPath(e.target.value)}>
                    </InputField>}
                    {InputField && <InputField
                        className='test-schedule'
                        placeholder='Schedule'
                        valueData={test_schedule}
                        onChange={e => setSchedule(e.target.value)}
                        pattern='([1-7,])*'>
                    </InputField>}
                </div>

                <div className='form-buttons'>
                    {Button && <Button link='/' className='save-execute' type='submit' onClick={reload}>Save and execute</Button>}
                    {Button && <Button className='submit' type='submit'>Save</Button>}
                </div>
            </form>
        </Fragment>
    )
}

export default QAForm
