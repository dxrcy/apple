/* Please stop trying to STEAL our SECRET source code for this innovative website! */

// Stop context menu
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// Change to yellow after time
const time = 2000; // Time until turns angry
var timer;
addEventListener("mousedown", () => {
    timer = setTimeout(makeAngry, time);
});
addEventListener("touchstart", () => {
    timer = setTimeout(makeAngry, time);
});
addEventListener("mouseup", () => {
    clearTimeout(timer);
    makeNotAngry();
});
addEventListener("touchend", () => {
    clearTimeout(timer);
    makeNotAngry();
});
addEventListener("touchcancel", () => {
    clearTimeout(timer);
    makeNotAngry();
});
function makeAngry() {
    document.querySelector("main").className = "angry";
}
function makeNotAngry() {
    document.querySelector("main").className = "";
}
