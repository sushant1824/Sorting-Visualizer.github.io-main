import React, {useEffect, useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {nanoid} from 'nanoid';

import './navbar.css';
import LandingPage from "./HomePage/landingPage";
import NavbarAll from "./navbar";
import MyNotes from "./Notes/MyNotes";
import Sorting from "./SortingVisualizer/Sorting";
import AddNotePopup from "./Popup Button/AddNotePopup";
import ScrollToTop from "./ScrollToTop";

const Main = ({handleLogout}) => {

    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText ] = useState('');

    const addNote = (title, text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            title: title,
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    useEffect(()=>{
        const savedNotes = JSON.parse( localStorage.getItem('react-notes-app-data') );
        if(savedNotes){
            setNotes(savedNotes)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    },[notes])

    return (
            <Router>
                <ScrollToTop/>
                <NavbarAll handleLogout={handleLogout}/>

                <Routes>
                    <Route exact path="/" element={<LandingPage />} />

                    <Route exact path="/Bubble-sort" element={<Sorting algorithm={'Bubble Sort'}/>} />
                    <Route exact path="/Insertion-sort" element={<Sorting algorithm={'Insertion Sort'}/>} />
                    <Route exact path="/Merge-sort"element={<Sorting algorithm={'Merge Sort'}/>} />
                    <Route exact path="/Quick-sort" element={<Sorting algorithm={'Quick Sort'}/>} />
                    <Route exact path="/Selection-sort" element={<Sorting algorithm={'Selection Sort'}/>} />

                    <Route exact path="/myNotes" 
                        element={
                            <MyNotes notes={notes} setNotes={setNotes} searchText={searchText} setSearchText={setSearchText}/>
                        } 
                    />
                </Routes>

                <AddNotePopup handleAddNote={addNote}/>
            </Router>
    );
};

export default Main;