var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var draws = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    //random for oppponent
    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    //check for winner
    if (you == opponent) {
        draws++;
        updateResultText("Draw!");
    }
    else if (
        (you == "rock" && opponent == "scissors") ||
        (you == "scissors" && opponent == "paper") ||
        (you == "paper" && opponent == "rock")
    ) {
        yourScore++;
        updateResultText("You win!");
    } 
    else {
        opponentScore++;
        updateResultText("You lose!");
    }

    document.getElementById("counterText").innerText = "Wins: " + yourScore + " | Draws: " + draws + " | Losses: " + opponentScore;
}

function updateResultText(result) {
    document.getElementById("resultText").innerText = "Result: " + result;
}