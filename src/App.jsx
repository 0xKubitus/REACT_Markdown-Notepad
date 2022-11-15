import {useState} from "react";
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
// import Sidebar from './components/Sidebar';

import './App.css';


function App() {
    const [currentNoteTitle, setCurrentNoteTitle] = useState('');
    const [currentMarkdownContent, setCurrentMarkdownContent] = useState('');

    const title = JSON.stringify(currentNoteTitle)
    const content = JSON.stringify(currentMarkdownContent)


    // GETTING AND SAVING DATA FROM MarkdownInput.jsx COMPONENT AS STATE (to be passed to and used by 'NoteDisplay'):
    const editTitleInput = event => {
        // 👇️ use 'event.target.value' passed from 'MarkdownInput.jsx':
        setCurrentNoteTitle(event.target.value)
        // console.log(currentNoteTitle);
    }

    const editNoteContent = event => {
        // 👇️ use 'event.target.value' passed from 'MarkdownInput.jsx':
        setCurrentMarkdownContent(event.target.value)
        // console.log(currentMarkdownContent);
    }

    const saveNote = event => {
        event.preventDefault();
        // console.log(`currentNoteTitle = ${currentNoteTitle}, currentMarkdownContent = ${currentMarkdownContent}`);

        // USE LOCALSTORAGE TO SAVE THE NOTE:
        localStorage.setItem(title, content);
        alert(`Note successfully saved as: "${currentNoteTitle}".`)
    }

    // TO CHECK THAT NOTE HAS SUCCESSFULLY BEEN SAVED:
    // const noteSavedLocally = localStorage.getItem(title);
    // const savedNoteInString = JSON.parse(noteSavedLocally)
    // console.log(savedNoteInString);

    // TO REMOVE AN ITEM FROM LOCALSTORAGE:
    // localStorage.removeItem('theTitle');

    // TO DELETE ALL ENTRIES FROM LOCALSTORAGE:
    // localStorage.clear();

    // --------------------------------------------------------------------

  

  return (
    <div className="App">

        <div className="main-container">
            <NoteDisplay currentNoteTitle={currentNoteTitle} currentMarkdownContent={currentMarkdownContent} />
            <br />
            <hr />
            <MarkdownInput editTitleInput={editTitleInput} editNoteContent={editNoteContent} saveNote={saveNote} />
        </div>

        {/* <Sidebar notes={notes} /> */}
    </div>
  );  
};

export default App;