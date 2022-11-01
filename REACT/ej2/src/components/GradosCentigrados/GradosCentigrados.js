import React from 'react'
import { useState } from 'react';
import "./GradosCentigrados.css"

const GradosCentigrados = () => {

  const [centigrados, setCentigrados]   = useState();
  const [farenheit, setFarenheit] = useState(0);
  
  const conversion = event => {
    setCentigrados(event.target.value);
  }

  function calculo(){
    setFarenheit(centigrados * (9/5) + 32)
  }


  return (
    <div className='container'>
      <div>
          <h2>Conversor grados centigrados a Farenheit</h2>
          <input onChange={conversion} 
          type="text" 
          placeholder='Grados Centigrados' 
          value={centigrados}/>
          <button onClick={calculo}>convertir</button>
      </div>
      <div>
        <p>Grados Farenheit: {farenheit}</p>
      </div>
    </div>
  )
}

export default GradosCentigrados