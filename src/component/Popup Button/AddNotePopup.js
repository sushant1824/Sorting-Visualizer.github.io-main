import './notes.css';
import { BsFillPenFill } from 'react-icons/bs';
import { useState } from 'react';
import AddNote from './AddNote';

const AddNotePopup = ({ handleAddNote }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    return (
        <div>
            { showPopup && <AddNote handleAddNote={handleAddNote} handleClosePopup={closePopup}/>}
            <button className="note-popup-btn" onClick={handlePopup}><BsFillPenFill size='1.5rem'/></button>
        </div>
    );
}

export default AddNotePopup;