import axios from 'axios'

const api = axios.create({
    baseURL:  'https://checkonline.in/api/',
})

export default api;