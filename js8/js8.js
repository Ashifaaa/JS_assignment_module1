function printLeapYears() {
    // GETS the start and end years from the user
    var startYear = parseInt(document.getElementById("startYear").value);
    var endYear = parseInt(document.getElementById("endYear").value);

    // checks if valid input
    if (!isNaN(startYear) && !isNaN(endYear) && startYear <= endYear) {
        // creates an array to store leap years
        var leapYears = [];

        // checks interval for leap years
        for (var year = startYear; year <= endYear; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                leapYears.push(year);
            }
        }

        // dispaly the leap years in an unordered list
        var leapYearsList = document.getElementById("leapYearsList");
        leapYearsList.innerHTML = "<ul>" + leapYears.map(year => "<li>" + year + "</li>").join("") + "</ul>";
    } else {
        alert("Please enter valid start and end years.");
    }
}