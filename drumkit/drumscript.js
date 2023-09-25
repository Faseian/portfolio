var numDrumButtons = document.querySelectorAll(".drum").length;

for (i =0; i <= numDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener('click', function() {
        playSound(this.innerHTML);
    })
}

function playSound(keyHTML) {
    switch(keyHTML) {
        case 'A':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
          break;
        case 'S':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'D':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'F':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'J':
            var snare = new Audio("./sounds/snare.mp3")
            snare.play();
            break;
        case 'K':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case 'L':
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
      }
}