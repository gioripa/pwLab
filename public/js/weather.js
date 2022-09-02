
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

document.addEventListener('DOMContentLoaded', async () => {
    navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords;
        var x = await getWeatherInfo(latitude, longitude);
        var name = x.name;
        document.getElementById("pos").innerText += " "+name;
        document.getElementById("current-icon").src = 'http://openweathermap.org/img/wn/'+x.weather[0].icon+'@2x.png' ;
        document.getElementById("current-temp").innerText = x.main.temp;
        document.getElementById("windSpeed").innerText = x.wind.speed;
        document.getElementById("humidity").innerText = x.main.humidity;
        x = await forecast(latitude, longitude);
        
        console.log(x);
    })
    var response = await getCityInfo('Roma');
    document.getElementById(`Roma-temp`).innerText = response.main.temp;
    document.getElementById(`Roma-icon`).src = 'http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png' ;
    
    response = await getCityInfo('Torino');
    document.getElementById(`Torino-temp`).innerText = response.main.temp;
    document.getElementById(`Torino-icon`).src = 'http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png' ;
    
    response = await getCityInfo('Milano');
    document.getElementById(`Milano-temp`).innerText = response.main.temp;
    document.getElementById(`Milano-icon`).src = 'http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png' ;
});

const forecast = async (lat,lon) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}&units=metric&lang=it`;
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};