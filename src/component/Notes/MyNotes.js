import React, { useEffect } from 'react'

import './myNotes.css'
import NotesList from './NotesList'
import Search from './Search';

function MyNotes({ notes, setNotes, searchText, setSearchText }) {

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };

    return (
        <div className='note_container'>
            <p className='note_header'>My Notes</p>
            <Search handleSearchNote={setSearchText} />
            <NotesList 
                notes={notes.filter((note) => note.title.toLowerCase().includes(searchText))} 
                handleDeleteNote={deleteNote}
            />
        </div>
    )
}

export default MyNotes