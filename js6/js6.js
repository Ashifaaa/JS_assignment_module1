var shouldCalculate = confirm("Should I calculate the square root?");

if (shouldCalculate) {
    // if user selects OK, ask for a number
    var number = prompt("Enter a number:");

    // entered number is valid checker
    if (number !== null && !isNaN(number)) {
        // convert input to a number
        number = parseFloat(number);

        // check if number is non-negative
        if (number >= 0) {
            // square root calculator/displayer
            var squareRoot = Math.sqrt(number);
            document.write("The square root of " + number + " is: " + squareRoot);
        } else {
            // dsiplay message for negative numbers
            document.write("The square root of a negative number is not defined.");
                }
    } else {
         // dsiplay message for invalid input
        document.write("Invalid input. Please enter a valid number.");
    }
} else {
    // display message if select cancel
    document.write("The square root is not calculated.");
}
