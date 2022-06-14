const time = 2000; // Time until turns angry
var timer;
addEventListener("mousedown", () => {
  timer = setTimeout(makeAngry, time);
});
addEventListener("mouseup", () => {
  clearTimeout(timer);
  makeNotAngry();
});

function makeAngry() {
  $(".contain").addClass("angry");
}
function makeNotAngry() {
  $(".contain").removeClass("angry");
}