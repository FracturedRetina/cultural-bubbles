var lang = getParameterByName("lang");

if (lang == "") {
	lang = "en"
}

$(document).ready(function() {
	$.getJSON("bubbles.json", function(json) {
		for (var i = 0; i < json.bubbles.length; i++) {
			renderBubble(json.bubbles[i]);
		}
	});
});

function renderBubble(b) {
	$("<div class=\"bubble\"><div class=\"img\" style=\"background-image: url(" + b.img + ")\"></div><h" + b.size + " class=\"title\">" + b.title[lang] + "</h" + b.size + "><p>" + b.description[lang] + "</p></div>").appendTo("#content");
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}