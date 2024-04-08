//Reference IDs
//class Question_ {
//    constructor(QuestionType, Answer) {
//        this.QuestionType_ = QuestionType;
//        this.Answer_ = Answer;

//    }
//}



let NumberArray =
    [
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4),
        Math.floor(Math.random() * 4)

    ];


let Questions = [

    document.getElementById("Question 1"),
    document.getElementById("Question 2"),
    document.getElementById("Question 3"),
    document.getElementById("Question 4")
];



for (let i = 0; i < Questions.length; i++) {
    let RandomNumber = Math.floor(Math.random() * 4);

    switch (RandomNumber) {
        case 0:
            Questions[i].innerText = "1 + 1";
            break;
        case 1:
            Questions[i].innerText = "2 + 2";
            break;
        case 2:
            Questions[i].innerText = "3 + 3";
            break;
        case 3:
            Questions[i].innerText = "4 + 4";
            break;
    }

}


alert("PING");


let MarkQuizButton = document.getElementById("Quiz Button");
let ResetQuizButton = document.getElementById("Reset Quiz");

let Question1Input = document.getElementById("Question1Input");
let Question1Result = document.getElementById("Question1Result");

let Question2Input = document.getElementById("Question2Input");
let Question2Result = document.getElementById("Question2Result");

let Question3Input = document.getElementById("Question3Input");
let Question3Result = document.getElementById("Question3Result");

let Question4Input = document.getElementById("Question4Input");
let Question4Result = document.getElementById("Question4Result");

let ResultsText = document.getElementById("Results");
let ResultImage = document.getElementById("QuizResultFormatting");
let QuestionCorrection = document.getElementById("QuestionCorrection");
let TimerText = document.getElementById("Timer");
let TimeLeft = 100;
let Submitted = false;
let TakingQuiz = true;

//Event Listeners
MarkQuizButton.addEventListener("click", MarkQuiz);
ResetQuizButton.addEventListener("click", ResetQuiz);

localStorage.clear();
TimerText.innerText = "Time: " + String(TimeLeft);
setInterval(TimeCountdown, 1000);

//Marks The Quiz
function MarkQuiz() {
    if (Submitted == false && TakingQuiz) {
        let CurrentMark = 0;;
        Submitted = true

        if (Question1Input.value == 0.25) {
            CurrentMark++;
            Question1Result.innerText = "Correct";
        }
        else {
            Question1Result.innerText = "Incorrect";
        }
        if (Question2Input.value == 20) {
            CurrentMark++;
            Question2Result.innerText = "Correct";
        }
        else {
            Question2Result.innerText = "Incorrect";
        }

        if (Question3Input.value == "15x^4 + 8x^3") {
            CurrentMark++;
            Question3Result.innerText = "Correct";
        }
        else {
            Question3Result.innerText = "Incorrect";
        }

        if (Question4Input.value == 3) {
            CurrentMark++;
            Question4Result.innerText = "Correct";
        }
        else {
            Question4Result.innerText = "Incorrect";

        }
        TakingQuiz = false;
        let Username = prompt("User: ");
        let TimeEnded = TimeLeft;
        localStorage.setItem(Username, TimeEnded);
        ResultsText.innerText = ("Score: " + CurrentMark + " / 4");
    }
    else {
        alert("Already Submitted");
    }
}

//Resets the Quiz
function ResetQuiz() {
    CurrentMark = 0;
    Question1Input.value = "";
    Question2Input.value = "";
    Question3Input.value = "";
    Question4Input.value = "";
    TimeLeft = 100;
    TimerText.innerText = "Time: " + String(TimeLeft);
    alert("Quiz Resetted");


}

function TimeCountdown() {
    if (TimeLeft > 0 && TakingQuiz) {
        TimeLeft--;
        TimerText.innerText = "Time: " + String(TimeLeft);
    }

    if (TimeLeft <= 0 && TakingQuiz) {
        alert("Out of Time, Forced Submit");
        MarkQuiz();
        TakingQuiz = false;
    }

}
