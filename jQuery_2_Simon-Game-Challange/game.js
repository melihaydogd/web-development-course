var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var level = 0;
var checkIndex = 0;

function animate(id, clicked) {
	new Audio("sounds/" + id + ".mp3").play();
	if (clicked) {
		$("#" + id).addClass("pressed");
		setTimeout(function () {
			$("#" + id).removeClass("pressed");
		}, 100);
	} else {
		$("#" + id)
			.fadeOut(100)
			.fadeIn(100);
	}
}

function gameOver() {
	$("h1").text("Game Over, Press Any Key to Start");
	new Audio("sounds/wrong.mp3").play();
	$("body").addClass("game-over");
	setTimeout(function () {
		$("body").removeClass("game-over");
	}, 200);
	level = 0;
	checkIndex = 0;
	gamePattern = [];
}

function newSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var id = buttonColors[randomNumber];
	gamePattern.push(id);
	animate(id, false);
	checkIndex = 0;
	level += 1;
	$("h1").text("Level " + level);
}

$(document).on("keypress", function () {
	if (level === 0) {
		newSequence();
	}
});

$(".btn").on("click", function () {
	if (level === 0) {
		gameOver();
	} else {
		if (this.id === gamePattern[checkIndex]) {
			checkIndex += 1;
			if (checkIndex === gamePattern.length) {
				setTimeout(function () {
					newSequence();
				}, 1000);
			}
		} else {
			gameOver();
		}
	}
    animate(this.id, true);
});