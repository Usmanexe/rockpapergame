let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
        msgPara.innerHTML = `<img src ="images/Amitabh-Bachcha12015.jpg" />`

    msgPara.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
    
        msgPara.innerHTML = `<img src="images/images.jfif" />`
        userScore++;
        userScorePara.innerText = userScore;
    } else {

        compScore++;
        compScorePara.innerText = compScore;

        msgPara.innerHTML = `<img src ="images/images (1).jfif" />`
    }
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
  
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {

            userWin = compChoice === "scissors" ? false : true;
        } else {
        
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});