function checkLeapYear() {
    // gets the year
    var year = parseInt(document.getElementById("year").value);

    // check if it's a leap year
    var isLeapYear = false;

        if (year % 4 === 0) {
            if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
                isLeapYear = true;
            }
        }

    // display result in HTML document
    var leapYearResult = document.getElementById("leapYearResult");

        if (isLeapYear) {
            leapYearResult.innerHTML = year + " is a leap year.";
        } else {
            leapYearResult.innerHTML = year + " is not a leap year.";
        }
}
