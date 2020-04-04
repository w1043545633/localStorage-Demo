window.addEventListener("storage", function(e){
	document.getElementById("id").innerHTML = e.key;
	document.getElementById("oldValue").innerHTML = e.oldValue;
	document.getElementById("newValue").innerHTML = e.newValue;
	document.getElementById("url").innerHTML = e.url;
	document.getElementById("storageArea").innerHTML = e.storageArea;
}, false);