const request = async url => {
    const response = await fetch(url);
    return response.ok ? response.json() : Promise.reject({ error: 500 });

};

const getWeatherInfo = async (latitude, longitude) => {
    try {
        const url =`/getWeatherInfo?lat=${latitude}&lon=${longitude}`;
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const getCityInfo = async (name) => {
    try {
        const url = `/getCityInfo?name=${name}`;
        const response = await request(url);
        return response;
    } catch (err) {
        console.log(err);
    }
};

const forecast = async (latitude, longitude) => {
    try {
        const url = `/getForecast?lat=${latitude}&lon=${longitude}`;
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