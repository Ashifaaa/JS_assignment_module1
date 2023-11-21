function checkPrimeNumber() {
    var userNumber = parseInt(document.getElementById("userNumber").value);

    // if valid check
    if (!isNaN(userNumber) && Number.isInteger(userNumber) && userNumber > 1) {
        // check if prime number
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(userNumber); i++) {
            if (userNumber % i === 0) {
                isPrime = false;
                break;
            }
        }

        // displau in HTML
        var primeNumberResult = document.getElementById("primeNumberResult");

        if (isPrime) {
            primeNumberResult.innerHTML = userNumber + " is a prime number.";
        } else {
            primeNumberResult.innerHTML = userNumber + " is not a prime number.";
        }
    } else {
        var primeNumberResult = document.getElementById("primeNumberResult");
        primeNumberResult.innerHTML = "Please enter a valid number.";
    }
}