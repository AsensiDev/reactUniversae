import axios from 'axios'
const baseUrl = 'http://localhost:3000/react-rick-and-morty'

const login = async credentials => {
    const {data} = await axios.post(baseUrl, credentials)
    return data
}

export default {login}