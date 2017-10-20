// // doc ready & console.log test
// $('document').ready(function(){
// 	console.log("you're good to go!");

// global variables
var questionArray = [
	"Who is NOT an original member of the Wu-Tang Clan?",
	"The majority of Wu-Tang members are from which New York City Borough?",
	"Who is the first Wu-Tang member to release a solo effort?",
	"'Ghostface, catch the blast of a hype verse. My glock bursts, leave in a hearse, I did worse I come rough, tough like an elephant tusk Ya head rush, fly like Egyptian musk' are lyrics to which '36 Chambers' song?",
	"Out of the group, which two members can often be found collaborating witheach other throughout the years?",
	"'Raw I'ma give it to ya, wit' no trvia. Raw like cocaine straight from Bolivia. My hip-hop will rock and shock the nation. Like the Emancipation Proclamation' are lyrics rapped by which member?",
];
var answerArray = [[
	"Ghostface Killah",
	"RZA",
	"Method Man",
	"Cappadonna",
],
[	"Queens",
	"Staten Island",
	"Brooklyn",
	"Bronx",
],
[	"Ghostface Killah",
	"GZA",
	"Raekwon",
	"Method Man",
],
[	"Shame on a Nuh",
	"Da Mystery of Chessboxin'",
	"Bring Da Ruckus",
	"Protect Ya Neck",
],
[	"Ghostface Killah and Raekwon",
	"RZA and GZA",
	"Method Man and Redman",
	"ODB and U-God",
],
[	"Method Man",
	"GZA",
	"Inspectah Deck",
	"U-God",
],
];
var correctAnswer = [

"D. Cappadonna",

"B. Staten Island",

"A. Ghostface Killah",

"C. Bring Da Ruckus",

"A. Ghostface Killah and Raekwon",

"D. U-God",
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
var endSound = new Audio("assets/sound/cream.mp3")

// functions -----------------------------------
function updateHTML(){
	gameHTML = "<p class='text-center timeLeft'p>Time Remaining: <span class='timer'>15</span></p><p class='text-center question'>" + questionArray[questionCounter] + "</p><p class='answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".staging").html(gameHTML);
};
function resetGame() {
	rightCount = 0;
	wrongCount = 0;
	skippedCount = 0;
	questionCounter = 0;
	counter = 15;
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
		$(".timer").html(counter);
	}
};
function win() {
	rightCount++;
	gameHTML = "<p class='text-center timeLeft'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/financial.gif'>";
	$(".staging").html(gameHTML);
	setTimeout(wait, 3000); 
}
function timeLoss () {
	skippedCount++;
	gameHTML = "<p class='text-center timeLeft'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/cream.gif'>";
	$(".staging").html(gameHTML);
	setTimeout(wait, 5000); 
}
function loss () {
	wrongCount++;
	gameHTML = "<p class='text-center timeLeft'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswer[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/shaolin.gif'>";
	$(".staging").html(gameHTML);
	setTimeout(wait, 5000);
}
function wait() {
	if (questionCounter < 5) {
		questionCounter++
		updateHTML();
		counter = 15;
		timer();
	}
	else {
		endScreen();
	}

function endScreen() {
	startSound.pause();
	endSound.play();
	gameHTML = "<p class='text-center timeLeft'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center recap'>Here are your results!" + "</p>" + "<p class='summary'>Correct Answers: " + rightCount + "</p>" + "<p class='summary'>Wrong Answers: " + wrongCount + "</p>" + "<p class='summary'>Unanswered: " + skippedCount + "</p>" + "<img class='center-block img-end' src='assets/images/cream.jpg'>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
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
$("body").on("click", ".reset-button", function(event) {
	resetGame();

});


// });

// game not udpating after last question