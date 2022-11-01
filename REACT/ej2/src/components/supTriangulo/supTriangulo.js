import React from 'react'
import {useState} from 'react'
import "./supTriangulo.css"

function supTriangulo(){

    
 
  return (
    <div>
      <label>Base del triangulo</label>
      <input type="text"/>
      <label>Altura del triangulo</label>
      <input type="text"/>
      <input type="submit" value="Submit"/>
    </div>
  )
}

export default supTriangulo