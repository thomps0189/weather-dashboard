var locationFormEl = document.querySelector("#location")
var locationInputEl = document.querySelector("#location-input");


var getWeatherData = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=ba3af0c57267c9b751ea6ef5a926e30c"
    
     var response = fetch("https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=ba3af0c57267c9b751ea6ef5a926e30c"
    ).then(function(response) {
        response.json().then(function(data) {
          console.log(data)  
        })
        
    })

    console.log("outside")
    
    // .then((response) => response.json())
    // .then((data) => console.log(data));   
    // }
    
}

getWeatherData();