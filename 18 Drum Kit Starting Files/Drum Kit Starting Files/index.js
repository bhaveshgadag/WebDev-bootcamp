function playDrum(input){
    switch(input){
        case 'w':
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'd':
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
        case 'j':
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;
        case 'k':
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;
        case 'l':
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;
    }
}

document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", function() {
        playDrum(this.innerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    playDrum(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 200);
    console.log(currentKey);
    

}