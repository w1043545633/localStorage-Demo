var bgcolor = document.getElementById("bgcolor");
var font = document.getElementById("font");
var image = document.getElementById("image");

var htmlEle = document.body;
var pEle = document.querySelector('p');
var imgEle = document.querySelector('img');

if( localStorage.getItem("bgcolor")){
	setStyles();
} else {
	populateStorage();
	setStyles();
}

function populateStorage(){
	localStorage.setItem("bgcolor", bgcolor.value);
	localStorage.setItem("font", font.value);
	localStorage.setItem("image", image.value)
}

function setStyles(){
	var currentColor = localStorage.getItem("bgcolor");
	var currentFont = localStorage.getItem("font");
	var currentImage = localStorage.getItem("image");

	bgcolor.value = currentColor;
	font.value = currentFont;
	image.value = currentImage;

	htmlEle.style.backgroundColor = '#' + currentColor;
	pEle.style.fontFamily = currentFont;
	imgEle.src = currentImage;
}

bgcolor.addEventListener("change", function(){
	populateStorage();
	setStyles();
}, false);

font.addEventListener("change", function(){
	populateStorage();
	setStyles();
}, false);

image.addEventListener("change", function(){
	populateStorage();
	setStyles();
}, false);