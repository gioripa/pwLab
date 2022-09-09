const forecastDisplay = async (data) => {
    var d = document.getElementById("forecast");
    var dim = data.cnt;
    var l = data.list;
    for(let i=0;i<dim;i++){
        var f = l[i];
        var w = f.weather[0];
        var date = new Date(f.dt_txt);
        d.innerHTML += `<div class="tempday col">
        <div>${date.getHours()}:00 </div>
        <div>${date.toLocaleString('it-it', { weekday: 'long' })}</div>
        <div>
            <img src="https://openweathermap.org/img/wn/${w.icon}.png" class = "weather-icon">
            <p>${Math.floor(f.main.temp)}°C</p>
        </div>
      </div>`
    }
};

document.addEventListener('DOMContentLoaded', async () => {
    x = await forecast(lat, lon);
        await forecastDisplay(x);
});