
for(var i=0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click", click);
}

function click (){
    var letter = this.innerHTML;
    makesound(letter);
    animate(letter);
}

document.addEventListener("keydown", function(event){
    makesound(event.key);
    animate(event.key);
});

function makesound(key){
    switch (key){
        case "w":
            var soundtom1 = new Audio("sounds/tom-1.mp3");
            soundtom1.play();
            break;
        case "a":
            var soundtom2 = new Audio("sounds/tom-2.mp3");
            soundtom2.play();
            break;
        case "s":
            var soundtom3 = new Audio("sounds/tom-3.mp3");
            soundtom3.play();
            break;
        case "d":
            var soundtom4 = new Audio("sounds/tom-4.mp3");
            soundtom4.play();
            break; 
        case "j":
            var soundtom5 = new Audio("sounds/snare.mp3");
            soundtom5.play();
            break; 
        case "k":
            var soundtom6 = new Audio("sounds/crash.mp3");
            soundtom6.play();
            break;                      
        case "l":
            var soundtom7 = new Audio("sounds/kick-bass.mp3");
            soundtom7.play();
            break;
        default:
            break;
        }
}

function animate(ani){
var activebutton = document.querySelector("."+ani);
activebutton.classList.add("pressed");
setTimeout(function() {
    activebutton.classList.remove("pressed");
},100);
}
   
