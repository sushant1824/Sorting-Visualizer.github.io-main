import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

function Note({ id, title, text, date, handleDeleteNote}) {
  return (
    <div className='note_note'>
        <div>
          <b>{title}</b>
          <hr/>
          <span>{text}</span>
        </div>
        <div className='note_note-footer'>
            <small>{date}</small>
            <MdDeleteForever 
              onClick={() => handleDeleteNote(id)}
              className='note_delete-icon' 
              size='1.3em'
            />
        </div>
    </div>
  )
}

export default Note;