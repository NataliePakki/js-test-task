$(document).ready(function () {
	$("#addDraggableBox").click(() => {
		var box = new DraggableBox();
		box.display($("body"));
	});

	$("#addDraggableAndExtendableBox").click(() => {
		var box = new DraggableAndExpandableBox();
		box.display($("body"));
	 });
});