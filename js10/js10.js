function calculateProbability() {
    var numDice = parseInt(document.getElementById("numDice").value);
    var sumOfEyes = parseInt(document.getElementById("sumOfEyes").value);

    // check if input is valid
    if (!isNaN(numDice) && !isNaN(sumOfEyes) && numDice > 0 && sumOfEyes > 0) {
        // simulate dice rolls, calculate probability
        var favorableOutcomes = 0;
        var totalOutcomes = 10000;

        for (var i = 0; i < totalOutcomes; i++) {
            var rollSum = 0;

            // roll each die
            for (var j = 0; j < numDice; j++) {
                rollSum += Math.floor(Math.random() * 6) + 1;
            }

            // checks if the sum matches the user's input
            if (rollSum === sumOfEyes) {
                favorableOutcomes++;
            }
        }

        // caclcukates and displays the probability
        var probability = (favorableOutcomes / totalOutcomes * 100).toFixed(2);
        var probabilityResult = document.getElementById("probabilityResult");
        probabilityResult.innerHTML = "Probability to get sum " + sumOfEyes + " with " + numDice + " dice is " + probability + "%.";
    } else {
        var probabilityResult = document.getElementById("probabilityResult");
        probabilityResult.innerHTML = "Please enter valid numbers greater than 0.";
    }
}