function rollDice() {
    // gets the number of dice rolls from user
    var numRolls = parseInt(document.getElementById("numRolls").value);

    // checks if the input is valid
    if (!isNaN(numRolls) && numRolls > 0) {
        // rolls the dice and calculates teh sum
        var sum = 0;
        for (var i = 0; i < numRolls; i++) {
            // die number generator
            var dieResult = Math.floor(Math.random() * 6) + 1;
            // adds the result to the sum
            sum += dieResult;
        }

        // displays the sum in the HTML document
        var diceResult = document.getElementById("diceResult");
        diceResult.innerHTML = "Sum of dice rolls: " + sum;
    } else {
        // display message for invalid input
        var diceResult = document.getElementById("diceResult");
        diceResult.innerHTML = "Please enter a valid number of dice rolls.";
    }
}