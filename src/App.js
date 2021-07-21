

import React, { useState } from 'react';
import Header from './Components/Header'
import CreateArea from './Components/CreateArea';
import Note from './Components/Note';

import './App.css';

function App(props) {

    const [notes , setNotes ] = useState([]);

    for(var i = 0;i<localStorage.length;i++){       
        notes.push(JSON.parse(localStorage.getItem(localStorage.key(i))));       
    };

    const deleteNote = (id)=>{
        window.location.reload(true);
        localStorage.removeItem(id);
    };
  
    return (
        <div className='App'>

            <Header />
            <CreateArea  /> 

            {notes.map((note,key)=>{
                if(note){
                    return(
                        <Note 
                            noteid={note.id}
                            key = {key} 
                            title={note.title}
                            content={note.content} 
                            date={note.date}
                            bgcolor={note.bgcolor}
                            deleteNote = {deleteNote}
                        />                            
                    )  
                }                          
                else{
                    return(
                        <p></p>
                    )
                }
            })}

        </div>
    );
}

export default App;

