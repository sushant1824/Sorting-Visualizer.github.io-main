import React from 'react'
import Note from './Note';

function NotesList({ notes, handleDeleteNote }) {
    return (
        <div className='note_notes-list'>
            {notes.map((note) => (
                <Note 
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    date={note.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
        </div>
    )
}

export default NotesList;