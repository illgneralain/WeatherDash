// pull current date make it the city date 
var $cityDate = moment().format("llll");
$cityDate("#currentdate").text ($cityDate);

// searching for city function 
var $clicked = $(".buttonsearch");
$clicked.on("click", citysearch);
$clicked.on("click", searchSave);
// add event listener for enter 
$("input").keyup(function() {
    if (event.key === "Enter") {
        $clicked.click();
    }
})

// function for searching city name 
function citysearch() {
    var cityname = (($(this).parent()).siblings("#cityenter")).val().toLowerCase(); 
    // val used as the type of local variable  
    function clear (){
        $("#cityenter").val("");
    }
    setTimeout(clear, 300);

    // Openweather API usage

    var firstQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname + "&units=imperial&appid=e7c303b6206e1039548ab3f11d2207b3";

    $.ajax({
        url: firstQueryURL
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // Variables for current conditions 
        var $currentTemp = parseInt(response.main.temp) + "F";
        var $currentWind = parseInt(response.wind.speed) + "mph"
        var $currentIconURL = "http://openweathermap.org/img/w/" + $currentIcon + ".png";
        var $currentHum = response.main.humidity + "%";

        $("#namecity").text(cityname);
        $("#tempcity").text($currentTemp);
        $("#windspeed").text($currentWind);
        $("#humcity").text($currentHum);
// Latitude and Longitude 

        var secondQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +
        "&exclude=hourly&units=imperial&appid=e7c303b6206e1039548ab3f11d2207b3";
        $.ajax({
            url: secondQueryURL, method: "GET"
        }).then(function (response) {
            console.log(response);
            var $uv = response.current.uvi;
            var $uvIndex = $("#uv-index");
            $uvIndex.text($uv);
            $uvIndex.blur();

            if ($uv <= 2) {
                $uvIndex.addClass("btn-success");
                $uvIndex.removeClass("btn-warning btn-hazard btn-danger btn-climate-change");
            }
            else if ($uv <=5) {
                $uvIndex.addClass("btn-warning");
                $uvIndex.removeClass("btn-success btn-hazard btn-danger btn-climate-change");
            }
            else if ($uv <=7) {
                    $uvIndex.addClass("btn-hazard");
                    $uvIndex.removeClass("btn-success btn-warning btn-danger btn-climate-change");
            }
            else if ($uv <=10.50) {
                        $uvIndex.addClass("btn-danger");
                        $uvIndex.removeClass("btn-success btn-hazard btn-warning btn-climate-change");
            }
            else if ($uv >=11) {
                $uvIndex.addClass("btn-climate-change");
                $uvIndex.removeClass("btn-success btn-hazard btn-danger btn-danger");
            }
            
        })
    })
}