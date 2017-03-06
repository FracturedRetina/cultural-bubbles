$(document).ready(function() {
	$.getJSON("bubbles.json", function(json) {
		for (var i = 0; i < json.bubbles.length; i++) {
			renderBubble(json.bubbles[i]);
		}
	});
});

function renderBubble(b) {
	$("<div class=\"bubble\"><div class=\"img\" style=\"background-image: url(" + b.img + ")\"></div><h class=\"title\"" + b.size + ">" + b.title.en + "</h" + b.size + "><p>" + b.description.en + "</p></div>").appendTo("#content");
}
