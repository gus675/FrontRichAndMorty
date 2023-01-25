import React, {useEffect, useState} from 'react'
import PersonajesApi from '../funciones/PersonajesApi'
import Tarjeta from './Tarjeta/Tarjeta'

const Main = () => {
    const [personajes, setPersonajes]= useState([])
    useEffect(()=>{
        PersonajesApi(setPersonajes)
    }, [])

    return (
        <><section style={cardStyles} >
            {personajes != null ? (
                personajes.map((personaje) => 
                    (<Tarjeta key={personaje.id}
                        name={personaje.name}
                        image={personaje.image}
                        species={personaje.species}
                 />)
                 )
                 ):('No pudieron cargarse los personajes...')
        }</section>
        </>)
        
}
export default Main

const cardStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    paddingBottom: "20px",
    fontFamily: "Verdana",
  }; 

