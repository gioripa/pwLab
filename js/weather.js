
const API = "40aa9efaf5c5149435908a060eb5baf9";

const request = async url => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({ error: 500 });

};

const getWeatherInfo = async (latitude, longitude) => {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + API + '&units=metric';
        const response = await request(url);
        console.log(response);
        document.getElementById("Roma-temp").innerText = response.main.temp;
        document.getElementById("Roma-icon").src='http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png' ;
    } catch (err) {
        console.log(err);
    }
};

const getCityCords = async (name) => {
    try {
        const url = 'https://api.openweathermap.org/geo/1.0/direct?q='+name+'&appid='+API;
        const response = await request(url);
        console.log(response);

    } catch (err) {
        console.log(err);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        getWeatherInfo(latitude, longitude);
        getCityCords('Roma');
    })
});