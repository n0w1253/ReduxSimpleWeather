import axios from 'axios'


const API_KEY = 'c45a98d2dd54ba83c19bc3c943a52b9f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` //ES6 template string


export const FETCH_WEATHER = 'FETCH_WEATHER'


export function fetchWeather(city){

    const url = `${ROOT_URL}&q=${city},us`

    const request = axios.get(url)  //returns a promise

   // console.log('Request:',request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}



