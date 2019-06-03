
// ref:
// https://stackoverflow.com/questions/36975619/how-to-call-a-rest-web-service-api-from-javascript
// https://www.w3schools.com/js/js_ajax_http_send.asp

// Notes! Consider adding check for wrong entry (years that do not exists.)
// Restrict entry to only digits, and valid year format.


var response;                                                                   // Holds API response.
var userInputSearchYear;                                                        // Input from user.
var search;                                                                     // Search string.
var longString;                                                                 // Concatenated search string.

var url = "http://api.nobelprize.org/v1/prize.json";

/**
 * --------------------------
 * Get input value from user.
 * --------------------------
 */

 function searchYear() {
 userInputSearchYear = document.getElementById("search-box").value;
 }

/**
 * --------------------------
 * Builds search string
 * --------------------------
 */

 function buildString() {
     search =
            "?category=medicine&year=" + userInputSearchYear +
            "&yearto=" + userInputSearchYear
            ;

    longString = url + search;
 }

/**
 * ---------------
 * Submits request.
 * ----------------
 */

 function submitRequest() {

     // Call functions.
     searchYear();
     buildString();

         var xhttp = new XMLHttpRequest();
         xhttp.open("GET", longString, false);
         xhttp.send();
         var response = JSON.parse(xhttp.responseText);

         // Print to HTML
         document.getElementById("year").innerHTML =
         "Year: " + userInputSearchYear;

         document.getElementById("category").innerHTML =
         "Category: " + (response.prizes[0].category);

         document.getElementById("name").innerHTML =
         "Name: " +
                    (response.prizes[0].laureates[0].firstname) + " " +
                    (response.prizes[0].laureates[0].surname);

         // Print to console (for troubleshooting).
             // console.log(response.prizes[0].year);
             // console.log(response.prizes[0].category);
             // console.log(response.prizes[0].laureates[0].firstname);
             // console.log(response.prizes[0].laureates[0].surname);

         // printouts();
 }

/**
 * ------------------------------
 * Handles printout to HTML page.
 * ------------------------------
 */

// Note! Will be added in next version.

function printouts() {

}
