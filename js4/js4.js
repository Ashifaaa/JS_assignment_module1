function sortStudent() {

            // get name
    var studentName = document.getElementById("studentName").value;

            // draw a random number
    var randomValue = Math.floor(Math.random() * 4) + 1;

            // use a switch statement to determine the house
    var house;
    switch (randomValue) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
         case 3:
             house = "Hufflepuff";
             break;
         case 4:
             house = "Ravenclaw";
             break;
         default:
             house = "Unknown House";
            }

            // display result in HTML document
    var sortingResult = document.getElementById("sortingResult");
    sortingResult.innerHTML = studentName + ", you are in " + house + "!";
}