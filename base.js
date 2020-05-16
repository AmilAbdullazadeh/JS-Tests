searchButton.addEventListener("click", searchWeather);


function searchWeather() {
    loadingText.style.display = "block";
    weatherBox.style.display = "none";
    let cityName = searchCity.value;

    if (cityName.trim().length === 0) {
        alert("Please enter a City Name");
    }

    let http = new XMLHttpRequest();
    let apiKey = "f1133f9f84102686e91644dd69fbcfa3";
    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric" + "&appid=" + apiKey;
    let method = "GET";

    http.open(method, url);

    http.onreadystatechange = function () {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            let data = JSON.parse(http.responseText);
            let weatherData = new Weather(cityName, data.weather[0].description.toUpperCase(), data.main.temp);
            console.log(weatherData);
            updateWeather(weatherData);
        } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
            alert("Something is wrong !");
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = "none";
    weatherBox.style.display = "flex";
}