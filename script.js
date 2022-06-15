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
  $(".contain").addClass("angry");
}
function makeNotAngry() {
  $(".contain").removeClass("angry");
}