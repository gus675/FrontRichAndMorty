import axios from 'axios'

const PersonajesApi = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character/')
    state(peticion.data.results)
}
export default PersonajesApi

