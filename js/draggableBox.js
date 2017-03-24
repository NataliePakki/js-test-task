class DraggableBox  {
	constructor() {
		var self = this;
		self.element = $("<div class='box'></div>");
		self.closeElement = $("<div class='btn btn-xs btn-primary closeButton'>&times;</div>");
		self.closeElement.appendTo(self.element);

		this.element.draggable({scroll : false});
		this.element.css({position : "fixed"});

		self.closeElement.click(() => {
			self.remove();
		});
	}

	display(field) {
		this.element.appendTo(field);
	}

	remove() {
		this.element.remove();
	}
}