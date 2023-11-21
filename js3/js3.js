
function displayInfo() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);

    var sum = number1 + number2 + number3;
    var product = number1 * number2 * number3;
    var average = sum / 3;

    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "Sum: " + sum + "<br>Product: " + product + "<br>Average: " + average;
}
