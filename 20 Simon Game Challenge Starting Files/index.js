var sequence = new Array();
var colors = ['green', 'red', 'yellow', 'blue'];

$(".btn").on("click", tilePress);

function playSound(name){
    switch(name){
        case 'green':
            sound = new Audio("./sounds/green.mp3");
            sound.play();
        break;
        case 'red':
            sound = new Audio("./sounds/red.mp3");
            sound.play();
        break;
        case 'blue':
            sound = new Audio("./sounds/blue.mp3");
            sound.play();
        break;
        case 'yellow':
            sound = new Audio("./sounds/yellow.mp3");
            sound.play();
        break;
    }
}

function tilePress() {
    $(this).addClass("pressed");
    playSound($(this).attr("id"));
    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 200);
}

function start() {
    var rng = Math.round(Math.random() * 3);

    $('#'+colors[rng]).click();
    
    sequence.push(colors[rng]);
    console.log(sequence);
    var i = 0;
    while(i < sequence.length) {
        $('.btn').on('click', function() {
            console.log("anon func");
            console.log($(this).attr('id'));
            console.log(sequence);
            console.log(i);
            console.log(sequence[0]);
            if($(this).attr('id') == sequence[i]){
                console.log("correct");
            } else {
            }
        });
        i++;
    }
}

$(document).on('keypress', start);