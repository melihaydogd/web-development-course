function handler (text) {
    switch (text) {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            animate(text);
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            animate(text);
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            animate(text);
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            animate(text);
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            animate(text);
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            animate(text);
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            animate(text);
            break;
        default:
            console.log(text);
            break;
    }
}

function animate (text) {
    var button = document.querySelector("." + text);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}

document.querySelectorAll(".drum").forEach((drum) => {
    drum.addEventListener("click", function () {
        handler(this.textContent);
    });
});

document.addEventListener("keydown", function (event) {
    handler(event.key);
});


// for (let drum of document.querySelectorAll(".drum")) {
//     drum.addEventListener("click", () => {
        // console.log(this);
        // new Audio("sounds/tom-1.mp3").play();
//     });
// }

// var numberOfDrums = document.querySelectorAll(".drum").length;
// for (let i = 0; i < numberOfDrums; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         console.log(this);
//         new Audio("sounds/tom-1.mp3").play();
//     });
// }