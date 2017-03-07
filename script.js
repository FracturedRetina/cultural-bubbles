var lang = getParameterByName("lang");

if (lang == "") {
	lang = "en"
}

$(document).ready(function() {
	$.getJSON("bubbles.json", function(json) {
		renderBubble(json.bubbles);
	});
});

function renderBubbles(b) {
	//Initialize holders
	var holders = [];
	for (var i = 0; i < b.length; i++) {
		if (holders.indexOf(b[i].size) == -1) {
			holders.append(b[i].size);
		}
	}
	holders.sort();
	for (var i = 0; i < b.length; i++) {
		$("<div id=\"holder" + holders[i] + "\"></div>").appendTo('#content');
	}

	for (var i = 0; i < b.length; i++) {
		$("<div class=\"bubble\"><div class=\"img\" style=\"background-image: url(" + b[i].img + ")\"></div><h" + b[i].size + " class=\"title\">" + b[i].title[lang] + "</h" + b[i].size + "><p class=\"description\">" + b[i].description[lang] + "</p></div>").appendTo("#holder" + b[i].size);
	}
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}