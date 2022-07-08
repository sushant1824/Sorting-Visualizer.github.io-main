import React, { useState } from 'react'

function AddNote({ handleAddNote, handleClosePopup }) {

    const [ noteTitle, setNoteTitle ] = useState('');
    const [ noteText, setNoteText ] = useState('');
    const titleCharacterLimit = 30;

    const handleTitleChange = (event) => {
        if(titleCharacterLimit - event.target.value.length >= 0) {
            setNoteTitle(event.target.value);
        }
    }

    const handleTextChange = (event) => {
        setNoteText(event.target.value);
    }

    const handleSave = () => {
        if(noteTitle.trim().length > 0 && noteText.trim().length > 0){
            handleAddNote(noteTitle, noteText);
            setNoteTitle('');
            setNoteText('');
            handleClosePopup();
        }
    }

    const handleCancel = () => {
        setNoteTitle('');
        setNoteText('');
        handleClosePopup();
    }

    return (
        <div className='new-note-div'>
            <textarea 
                rows='1' 
                placeholder='Enter title' 
                value={noteTitle} 
                onChange={handleTitleChange} 
                className='new-note_textarea'
            />
            <hr/>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add new text...'
                value={noteText}
                onChange={handleTextChange}
                className='new-note_textarea'
            />
            <div className='new-note-footer'>
                <button className='note-save' onClick={handleCancel}>Cancel</button>
                <button className='note-save' onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote;