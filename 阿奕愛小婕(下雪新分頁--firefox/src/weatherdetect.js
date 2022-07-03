// Get Weather from OpenWeatherMap
function getweather(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=1dfbbb073a087c7dd3a5f086202ba946&units=metric").then(function (response) {
    return response.json();
}).then(function(data) {
    let weather_temp = Math.floor(data['main']['temp']) + "°C";
    console.log(weather_temp);
    document.getElementById("temp").innerHTML = weather_temp;
    let weather_desc = data['weather'][0]['main'];
    //weather_desc could be "Clouds" or "Clear" or "Rain" or "Thunderstorm" or "Drizzle" or "Snow" or "Mist" or "Haze" or "Dust" or "Fog" or "Sand" or "Ash" or "Squall" or "Tornado"
    console.log(weather_desc);
    let weather_icon = data['weather'][0]['icon'];
    console.log(weather_icon);
    let weather_icon_url = "http://openweathermap.org/img/w/" + weather_icon + ".png";
    document.getElementById("weather_ico").src = weather_icon_url;
    let city = data['name'];
    document.getElementById("city").innerHTML = city;
});
}


chrome.storage.sync.get("weather_vla", function(items) {
var weather_vla = items.weather_vla;
if (items.weather_vla == undefined){
    chrome.storage.sync.set({weather_vla: 0});
    location.reload();
}
if (weather_vla == 0) {
// No custom weather location
// Get Location from IP
fetch("http://ip-api.com/json/").then(function (response) {
    return response.json();
}).then(function(data) {
    let city = data.city;
    getweather(city);
})
}
if (weather_vla == 1) {
// Custom weather location
chrome.storage.sync.get("weather_city", function(items) {
getweather(items.weather_city);
})}
});