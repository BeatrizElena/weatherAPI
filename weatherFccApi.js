function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
    // var url = "https://fcc-weather-api.glitch.me/api/current?lat=position.coords.latitude&lon=position.coords.longitude";
}

getLocation();

$(document).ready(function(){
  $("#getWeather").click(function(){
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=41.83&lon=-71.45";
    $.ajax({
      url: url,
      type: "GET",
      success: function(response){
        $("#cityName").html(response.name);
        $("#temp").html(response.main.temp);
        $("#weather-description").html(response.weather[0].description);
        $("#icon").html(response.weather[0].icon);
        console.log("it worked");
        console.log(url);
      }
    });
  });
});

















// Use the endpoint: https://fcc-weather-api.glitch.me/.
// Use this endpoint to get the weather at a location.
// To prevent abuses this server accepts GET requests only,
// and serves only the route /api/current?lon=:longitude&lat=:latitude.
// Images links are included in the JSON under weather[0].icon. This is enough to complete the challenge.
// Example:
// Request: https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139
