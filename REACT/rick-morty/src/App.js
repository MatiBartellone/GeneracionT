import { Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import {Characters} from './components/characters/characters';
import {CharactersId} from './components/characters/characters';
import { BrowserRouter,  Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path= "/characters/:id" element = {<CharactersId />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
