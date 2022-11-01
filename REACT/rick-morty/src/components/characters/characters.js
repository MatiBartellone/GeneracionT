import React from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import "./characters.css"
import {useState, useEffect} from 'react'
import axios from "axios"

function Card(props){

    const {image, name, status, episodes, species} = props

    return(
        <div className='cardContainer'>
            <div className="div1"><img src={image} /></div>
            <div className="div2"><h2>{name}</h2></div>
            <div className="div3">
                <p>status: {status}</p>
                <p>episodes: {episodes}</p>
                <p>species: {species}</p>
            </div>         
        </div>
    )
}

function CharactersId(){
    const params = useParams();

    const [id, setId] = useState([]);
    const [episodes, setEpisodes] = useState([]);
    

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${params.id}`)
        .then(res => {
            setId(res.data);
            setEpisodes(res.data.episode.length)
        }

        )
    }, [params.id]);

    const navigate = useNavigate();

    const navigateCharacters = () => {
        navigate("/characters")
    }

    return(
        <div className='idContainer'>
            <div className='cardContainer'>
                <div className="div1"><img src={id.image} /></div>
                <div className="div2"><h2>{id.name}</h2></div>
                <div className="div3">
                    <p>status: {id.status}</p>
                    <p>episodes: {episodes}</p>
                    <p>species: {id.species}</p>
                </div>         
            </div>
            <button className='button-33' role="button" onClick={navigateCharacters}>Characters</button>
        </div>
    )
}

function Characters() {
    const [personajes, setPersonajes] = useState([]);
 
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/")
    }

  

    useEffect(() => {
        return async () => {
            const response = await axios.get("https://rickandmortyapi.com/api/character");
            setPersonajes(response.data.results);
        };
    }, []);
   


  return (
    <div>

        <h1 >Characters</h1>
        
        <button className='button-33' role="button" onClick={navigateHome}>Home</button>
        <div id='container'>
            {personajes.map((personaje) => (<Link className='link' key={personaje.id} to = {`/characters/${personaje.id}`}> <Card name = {personaje.name} image = {personaje.image} status = {personaje.status} episodes = {personaje.episode.length} species = {personaje.species}/></Link>))}
        </div>
    </div>
  )
}

export {Characters, CharactersId};