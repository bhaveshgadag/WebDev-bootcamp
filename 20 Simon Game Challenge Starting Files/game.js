var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$('.btn').on('click', function() {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});


$(document).on('keypress', function() {
    if(level == 0){
        nextSequence();
    }
});


function nextSequence() {
    level++;
    var randomNumber = Math.round(Math.random() * 3);
    
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("h1").text("Level " + level);

    $('#'+randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function playSound(name){
    var buttonSound = new Audio('./sounds/' + name + '.mp3');
    buttonSound.play();
}

function animatePress(currentColor) {
    $('#'+currentColor).addClass("pressed");
    setTimeout(function() {
        $('#'+currentColor).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        console.log("correct");
        if(userClickedPattern.length == gamePattern.length){
            userClickedPattern = [];
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("restarting game");
        playSound("wrong");
        $('#level-title').text("Game Over, Press Any Key to Restart");
        $('body').addClass("game-over");
        setTimeout(function() {
            $('body').removeClass('game-over');
        }, 200);
        gamePattern = [];
        userClickedPattern = [];
        level = 0;
    }
}