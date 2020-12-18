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
    var cityname = ($(this).parent()).siblings("#cityenter")).val().toLowerCase(); 
}