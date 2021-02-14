var overlay = document.createElement("div");
var cat = document.createElement("div");

var catTiles = chrome.extension.getURL("./assets/cat_tiles.png");

overlay.classList.add("overlay");
overlay.innerHTML = "Hello";
cat.classList.add("cat");
cat.classList.add("walking");

overlay.appendChild(cat);
document.body.appendChild(overlay);