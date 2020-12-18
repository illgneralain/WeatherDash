// pull current date make it the city date 
var $cityDate = moment().format("llll");
$cityDate("#currentdate").text ($cityDate);

// searching for city function 
var $clicked = $(".buttonsearch");
$clicked.on("click", citysearch);
$clicked.on("click", searchSave);
$clicked.