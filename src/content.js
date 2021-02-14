var overlay = document.createElement("div");
var cat = document.createElement("div");
var catWrap = document.createElement("div");
var catButton = document.createElement("div");

var catTiles = chrome.extension.getURL("src/assets/aliltrans.png");

overlay.classList.add("overlay");
catWrap.classList.add("cat-wrapper");
cat.classList.add("cat");
cat.classList.add("walk-and-sit");
cat.style.backgroundImage = "url(" + catTiles + ")";
catButton.classList.add("cat-button");

cat.appendChild(catButton);
catWrap.appendChild(cat);
overlay.appendChild(catWrap);
document.body.appendChild(overlay);

setTimeout(function f() {catButton.style.pointerEvents = "all";}, 5500);

//move cat if pressed
var mousePosition;
var offset = [0, 0];
var isDown = false;
catButton.addEventListener("mousedown", function(e) {
    isDown = true;
    offset = [catWrap.offsetLeft - e.clientX, catWrap.offsetTop - e.clientY];
}, true);

document.addEventListener('mouseup', function() {
    if (isDown) {
        isDown = false;
        catWrap.style.animationPlayState = "paused, running";

        setTimeout(function f() {
            catButton.remove();
            cat.remove();
            catWrap.remove();
            overlay.remove();
        }, 1000);
        
    }
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        catWrap.style.left = (mousePosition.x + offset[0]) + 'px';
        catWrap.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

