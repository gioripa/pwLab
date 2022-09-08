
const API = "40aa9efaf5c5149435908a060eb5baf9";

const request = async url => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({ error: 500 });

};

const getWeatherInfo = async (latitude, longitude) => {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=' + API + '&units=metric';
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const getCityInfo = async (name) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${name},it&appid=${API}&units=metric&lang=it`;
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const forecast = async (lat, lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&cnt=5&units=metric&lang=it`;
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};

function check() {
    let x = document.forms["Form"]["search"].value;
    if (x == "") {
        alert("Si deve inserire il nome della città da ricercare");
        return false;
    }
}