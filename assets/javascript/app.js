// doc ready & console.log test
$('document').ready(function(){
	console.log("you're good to go!");

// global variables
var questionArray = [
	"This is question 1?",
	"this is question 2",
	"this is question 3",
	"this is question 4",
	"this is question 5",
	"this is question 6",
];
var answerArray = [[
	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
[	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
[	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
[	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
[	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
[	"first choice",
	"second choice",
	"third choice",
	"fourth choice",
],
];
var correctAnswer = [
"A. first choice"
];

var rightCount = 0;
var wrongCount = 0;
var skippedCount = 0;
var questionCounter = 0;
var counter = 15;
var clock;
var timeRemaining;
var selectedAnswer;
var questionNumber;
var startSound = new Audio("assets/sound/wwtbam.mp3");

// functions -----------------------------------
function updateHTML(){
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>15</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".staging").html(gameHTML);
};
function resetGame() {
	var rightCount = 0;
	var wrongCount = 0;
	var skippedCount = 0;
	var questionCounter = 0;
	var counter = 15;
	updateHTML();
	timer();
}
function timer() {
	clock = setInterval(fifteenSeconds, 1000);
	function fifteenSeconds(){
		if (counter === 0) {
			clearInterval(clock);
			timeLoss();
		}
		if (counter > 0) {
			counter--;
		}
		$("#timeLeft").html(counter);
	}
};
function win() {
	correctAnswer++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".staging").html(gameHTML);
	setTimeout(wait, 3000); 
}
function timeLoss () {
	skippedCount++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".staging").html(gameHTML);
	setTimeout(wait, 3000); 
}
function loss () {
	wrongCount++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".staging").html(gameHTML);
	setTimeout(wait, 3000);
}
function wait() {
	if (questionCounter < 7) {
		questionCounter++
		updateHTML();
		counter = 15;
		timer();
	}
	else {
		endScreen();
	}

function endScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + rightCount + "</p>" + "<p>Wrong Answers: " + wrongCount + "</p>" + "<p>Unanswered: " + skippedCount + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".staging").html(gameHTML);
}


}



// start button function
$("body").on("click", "#startButton", function(event) {
	startSound.play();
	$("#startButton").addClass("hidden");
	$(".staging").removeClass("hidden");
	updateHTML();
	timer();
});

$("body").on("click", ".answer", function(event) {
	startSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswer[questionCounter]) {
		console.log("correct answer");
		clearInterval(clock);
		win();
	}
	else {
		clearInterval(clock);
		loss();
	}
});











});