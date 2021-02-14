var overlay = document.createElement("div");
var cat = document.createElement("div");
var catWrap = document.createElement("div");

var catTiles = chrome.extension.getURL("src/assets/cat_tiles.png");

overlay.classList.add("overlay");
catWrap.classList.add("cat-wrapper");
cat.classList.add("cat");
cat.classList.add("walking");
cat.style.backgroundImage = "url(" + catTiles + ")";

catWrap.appendChild(cat);
overlay.appendChild(catWrap);
document.body.appendChild(overlay);