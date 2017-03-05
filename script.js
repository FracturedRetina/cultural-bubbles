$(document).ready(function() {
	$.getJSON("bubbles.json", function(json) {
		for (var i = 0; i < json.bubbles.length; i++) {
			renderBubble(json.bubbles[i]);
		}
	});
});

var bubbleId;
function renderBubble(b) {
	$("<div class=\"bubble\"><img src=\"" + b.img + "\" /><h" + b.size + ">" + b.title.en + "</h" + b.size + "></div>").appendTo("body");
}
