var locationFormEl = document.querySelector("#location")
var locationInputEl = document.querySelector("#location-input");
var city = document.getElementById("location-input").value;
 

let getWeatherData = {
    search: function() {
        this.fetchWeather(document.querySelector(".city-state").value);
    },
    
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=ba3af0c57267c9b751ea6ef5a926e30c")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },

    displayWeather: function(data) {
        const { name } = data;
        const { temp } = data.main;
        const { speed } = data.wind;
        const { humidity } = data.main;
        console.log(name, temp, speed, humidity)
        document.querySelector(".city-name-submitted").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = "Temperature: " + temp + "F";
        document.querySelector(".speed").innerText = "Wind Speed " + speed + " mph";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },

    search: function() {
        this.fetchWeather(document.querySelector(".location-input").value);
    }
};


document.querySelector(".btn").addEventListener("click", function() {
    getWeatherData.search();
});

