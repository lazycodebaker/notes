
import { nanoid } from 'nanoid';
import React, { useState  } from 'react';
import './CreateArea.css';
import {MdAdd} from 'react-icons/md';

function CreateArea(props) {

    const [note , setNote ] = useState({});
    const [color,setColor] = useState();
    const [isExpanded , setExpanded] = useState(false);

    function handleChange(e){
        e.preventDefault();

        const {name , value} = e.target;

        const date = new Date();

        if(e.target.name === 'bgcolor'){
            setColor(e.target.value);
        }; 

        setNote((prevalue)=>{
            return{
                ...prevalue,
                id : nanoid(),
                date : date.toLocaleDateString(),
                [name] : value
            };
        });      

    };  
        
    const handleClick = (e)=>{             
        localStorage.setItem(note.id,JSON.stringify(note));       
    };    
  
    const handleExpanded = (e)=>{
        setExpanded(true);     
    };

    return (
        <div>
            <form>

                {isExpanded && (
                    <input 
                        type='text' 
                        name='title' 
                        value = {note.title}
                        placeholder='Create a Title ..'       
                        onChange={handleChange} 
                    />
                )}        

                <p>
                    <textarea 
                        name='content'
                        value={note.content}
                        placeholder='Create a Note ..'        
                        onChange={handleChange}   
                        onClick={handleExpanded}                   
                    />
                </p>

                <input 
                    className='colorpicker' 
                    onChange={handleChange} 
                    name="bgcolor" 
                    value={color?color:"#FFF5B3"} 
                    type='color'>
                </input>                

                <button
                 onClick={handleClick}>
                     <p><MdAdd /></p>
                </button>
            </form>            
        </div>
    );
}

export default CreateArea;