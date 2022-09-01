import axios from 'axios'

const API_KEY = '350d9886ebbef5994e9a99f967bc4187'
// https://api.openweathermap.org/data/2.5/weather?q=ho chi minh&appid=${API_KEY}&units=metric&lang=vi
export const getAPI = (locationName) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}&units=metric&lang=vi`)
}