import React from 'react'
import './Tarjeta.css'

const cambiarColor=(value)=>{
    switch (value) {
        case "Alien":
            return "SpringGreen"
        case "Human":
            return "#fed353"            
        default:
            break;
    }
}
const Tarjeta = ({name,species,image}) => {
    const styles={backgroundColor:cambiarColor(species)} 
  return (

        <div key={name} className="container" style= {styles} >
            <h2 className="nombre">{name}</h2>
            <img className ="imagen" src={image} alt={name}/>
            <p className="specie">{species}</p>
        </div>

  )
}

export default Tarjeta