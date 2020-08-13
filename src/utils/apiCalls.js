import {API_HOST, API_KEY} from './../constants/api'

export const get5DaysWeather = (key) => (
    fetch(`${API_HOST}forecasts/v1/daily/5day/${key}?metric=true&details=true&apikey=${API_KEY}`)
    .then(response => response.json())
)

export const getCurrentConditions = (key) => (
    fetch(`${API_HOST}currentconditions/v1/${key}?apikey=${API_KEY}`)
    .then(response => response.json())
)

export const getAutoComplete = (string) => (
    fetch(`${API_HOST}locations/v1/cities/autocomplete?q=${string}&apikey=${API_KEY}`)
    .then(response => response.json())
)
