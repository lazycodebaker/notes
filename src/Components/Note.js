
import React from 'react';
import './note.css';
import {MdDeleteForever} from 'react-icons/md';

function Note(props) {

    const changeNoteColor = (id)=>{
        
    };

    return (
        <div className='note' style={{backgroundColor:props.bgcolor}}>
            <h1 className='title'>{props.title}</h1>
            <p className='content'>{props.content}</p>
            <p className='date'>{props.date}</p>  
            <input type='color' className='note-color-changer' />
            <span className={props.id} onClick={(e)=>props.deleteNote(props.noteid)}><MdDeleteForever /></span>
        </div>
    );
}

export default Note;