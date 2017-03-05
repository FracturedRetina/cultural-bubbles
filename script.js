$(document).ready(function() {
	var json;
	
	
	$.getJSON("bubbles.json", function(e) {
		json = e;
	});
	
	for (var i = 0; i < json.bubbles.length; i++) {
		renderBubble(json.bubbles[i]);
	}
});

var bubbleId;
function renderBubble(b) {
	var str = "<div class=\"bubble\"></div>";

	$(str).append("<img src=\"" + b.img + "\" />");
	$(str).append("<h" + b.size + ">" + b.title.en + "</h" + b.size + ">");

	$(document).append(str);
}
