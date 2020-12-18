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
}