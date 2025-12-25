let apiKey = "fa19d294033baecd7a62f7cc93148a6f"
const defaultCity = "paris";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"


async function getWeather() {
    console.log("clicked");
    const cityName = document.getElementById("cityName").value.trim();

    const city = cityName || defaultCity;

    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    const data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity;
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)} °C`;
    console.log(data);

    switch (data.weather.main) {
        case "Rain":
            document.getElementById('weatherCondition').src = "images/rain.png";
            break;
        case "Clouds":
            document.getElementById('weatherCondition').src = "images/clouds.png";
            break;
        case "Clear":
            document.getElementById('weatherCondition').src = "images/clear.png";
            break;
        case "Snow":
            documrnt.getElementById('weatherCondition').src = "images/snow.png";

    }
}

