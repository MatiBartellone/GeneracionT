import React from 'react'
import image from './Rick-And-Morty-Background-PNG.png'
import './home.css' 
import {useNavigate} from "react-router-dom";



function Home() {

    const navigate = useNavigate();

    const navigateCharacters = () => {
        navigate("/characters")
    }

  return (
    <div>
        
        <h1>Rick and Morty App</h1>

        <button className='button-33' role="button" onClick={navigateCharacters}>Characters</button>
        
        <div id='imgContainer'>
            <img src={image}/>
        </div>
        
        
        

    </div>
  )
}

export default Home;
