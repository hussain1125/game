let inputElement = document.querySelector("#input");
let btnElement = document.querySelector("#btn1");
let myScoreElement = document.querySelector("#myscore");
let guessElement = document.querySelector("#guess");
let commentary = document.querySelector("#com");
let target = document.querySelector("#target");
let innings1 = document.querySelector(".in1");
let innings2 = document.querySelector(".in2");
let btnElement2 = document.querySelector("#btn2");
let btnElement3 = document.querySelector("#btn3");
let guessElement2 = document.querySelector("#guess2");
let myScoreElement2 = document.querySelector("#myscore2");
let commentary2 = document.querySelector("#com2");
let target2 = document.querySelector("#target2");
let result2 = document.querySelector("#result2");

let finalScore = 0;
let finalScore2 = 0;

inputElement.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) { // Check if the pressed key is Enter
        const userInput = parseInt(inputElement.value);

        if (userInput >= 1 && userInput <= 6) {
            let compGuess = Math.floor(Math.random() * 6) + 1;
            guessElement.innerText = compGuess;

            let currScore = parseInt(myScoreElement.innerText) + userInput;
            myScoreElement.innerText = currScore;

            switch (userInput) {
                case 1:
                    commentary.innerText = "O that's for a single sensible batting";
                    break;
                case 2:
                    commentary.innerText = "Good Running between wickets";
                    break;
                case 3:
                    commentary.innerText = "Good Shot adds 3 more to the total";
                    break;
                case 4:
                    commentary.innerText = "That is class from Babar Azam. Typical.";
                    break;
                case 5:
                    commentary.innerText = "Greatttt";
                    break;
                case 6:
                    commentary.innerText = "Going, Going, and Goneee";
                    break;
            }

            if (userInput === compGuess) {
                
                finalScore = (currScore -userInput)+1;

                target.innerText = `So yeah, the innings is over and the opponent team needs ${(currScore - userInput) + 1}  runs to win this match`;
                commentary.innerText = "Thats out!!! Uplayable ball from the bowler ";
                myScoreElement.innerText = "0";
                guessElement.innerText = "0";
            }
        }

        inputElement.value = "";
    }
});

btnElement2.addEventListener("click", () => {
    innings1.style.display = "none";
    innings2.style.display = "block";

    myScoreElement.innerText = "0";
    guessElement.innerText = "0";
    commentary.innerText = "";
    target.innerText = "";
});

function checkComputerWin() {
    if (finalScore2 > finalScore) {
        target2.innerText = "What an excellent chase by the computer under pressure Take a boww!!!";
        myScoreElement2.innerText = "0";
        guessElement2.innerText = `${(currScore -compGuess)+1}`;
        result2.textContent = "Computer has won";
        commentary2.innerText = "";
        inputElement.value = "";
        btnElement3.disabled = true; // Disable the button
    }
}

btnElement3.addEventListener("click", () => {
    let userInput = parseInt(inputElement.value);
    let compGuess = Math.floor(Math.random() * 6) + 1;
    let currScore = parseInt(guessElement2.textContent) + compGuess;
    guessElement2.textContent = currScore;
    myScoreElement2.textContent = userInput;

    switch (compGuess) {
        case 1:
            commentary2.innerText = "Batsman is taking singles, keeping the wicket in hand +1 ";
            break;
        case 2:
            commentary2.innerText = "Slow And Steady but runs are adding, good running between the wickets +2";
            break;
        case 3:
            commentary2.innerText = "This is an excellent timing, good fielding, stopped certain boundary +3";
            break;
        case 4:
            commentary2.innerText = "Thats 4 this will surely take the team closer to the target +4";
            break;
        case 5:
            commentary2.innerText = "Amazinggggg +5";
            break;
        case 6:
            commentary2.innerText = "OMGGGG !!! Just Wao What a Six +6";
            break;
    }

    if (userInput === compGuess) {
        target2.innerText = `So yeah, the innings is over and the opponent team needs ${finalScore2} runs to win this match`;
        commentary2.innerText = "Thats out!!! Uplayable ball from the bowler ";
        myScoreElement2.innerText = "0";
        guessElement2.innerText = `${(currScore -compGuess)+1}`;

        if (finalScore > finalScore2) {
            result2.textContent = "User Won The Match";
            target2.innerText = "That was a good effort by computer but in the user defended the total and get this crucial victory";
        } 
        
        else {
            checkComputerWin(); // Check for computer win again if user is out but score not reached
        }
    } 
    
    else {
        // Update final score for computer
        finalScore2 = (currScore -compGuess)+1;
    }

    // Check for computer win after each action
    checkComputerWin();

    // Clear input field
    inputElement.value = "";
});

// Ensure initial button state based on score (optional)
if (finalScore2 > finalScore) {
    checkComputerWin(); // Run check in case initial score favors computer
}
