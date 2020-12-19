import React, { Fragment, useState } from 'react';
import './styles/QAForm.scss';
import { Button } from './Button';
import { InputField } from './InputField';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function QAForm() {
    const [website, setWebsite] = useState('');
    const [test_name, setName] = useState('');
    const [test_path, setPath] = useState('');
    const [test_schedule, setSchedule] = useState('');
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const reload = () => {
        window.location.reload();
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { website, test_name, editorState, test_path, test_schedule };
            console.log(body);
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
                    {InputField && <InputField className='test--name' placeholder='Website' valueData={website} onChange={e => setWebsite(e.target.value)}></InputField>}
                    {InputField && <InputField className='test--name' placeholder='Test name' valueData={test_name} onChange={e => setName(e.target.value)}></InputField>}
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="user--input--field test--case"
                        editorClassName="editor"
                        toolbarClassName="toolbar"
                        placeholder='Test case'
                    />
                    {InputField && <InputField className='test--path' placeholder='Test path' valueData={test_path} onChange={e => setPath(e.target.value)}></InputField>}
                    {InputField && <InputField className='test-schedule' placeholder='Schedule' valueData={test_schedule} onChange={e => setSchedule(e.target.value)}></InputField>}
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