import React from 'react'
import "./EuroDolar.css"
import {useState} from 'react'

function EuroDolar(){
  
  const [euro, setEuro]   = useState();
  const [dolar, setDolar] = useState(0);

  const conversion = event => {
    setEuro(event.target.value);
    setDolar(event.target.value * 0.98);
  }

  return (
    <div className='container'>
      <div>
          <h2>Conversor Euro a Dolar</h2>
          <input onChange={conversion} 
          type="text" 
          placeholder='Euros' 
          value={euro}/>
      </div>
      <div>
        <p>dolar: {dolar}</p>
      </div>
    </div>
  )
}

export default EuroDolar;