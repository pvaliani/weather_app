
// location of the back end weather saves
const baseURL = 'http://localhost:3000/api/weathersaves/'

export const getWeathers = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postWeather = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteWeather = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

