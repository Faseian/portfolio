var randNumOne = 0;
var randNumTwo = 0;
var randomDiceImage = "./images/dice" + randNumOne + ".png";
var randomDiceImage2 = "./images/dice" + randNumTwo + ".png";

button.addEventListener('click', (e) => {
    randNumOne = Math.floor(Math.random() * 6) + 1;
    randNumTwo = Math.floor(Math.random() * 6) + 1;

    randomDiceImage = "./images/dice" + randNumOne + ".png";
    randomDiceImage2 = "./images/dice" + randNumTwo + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    document.getElementById("instruct").style.display = "none";

    if (randNumOne > randNumTwo) {
        document.getElementById("title").innerHTML = "Player One Wins!";
    } else if (randNumOne < randNumTwo) {
        document.getElementById("title").innerHTML = "Player Two Wins!";
    } else {
        document.getElementById("title").innerHTML = "It's a Tie!";
    }
})