class DraggableAndExpandableBox extends DraggableBox {
	constructor() {
		super();
		var self = this;
		self.expandingButton = $("<div class='btn btn-xs btn-primary expand'>Expand</div>");

		self.isExpanded = false;

		self.expandableClass = "expandable";

		self.expandingButton.click(() => {
			if (self.isExpanded === true) {
				self.expandingButton.html("Expand");
				this.element.removeClass(self.expandableClass);
				//this.element.css({height: "80px"});
				self.isExpanded = false;
			}
			else {
				self.expandingButton.html("Collapse");
				this.element.addClass(self.expandableClass);
				//this.element.css({height: "100vh"});
				this.element.css({top: "0px"});
				self.isExpanded = true;
			}
		});

		self.expandingButton.prependTo(self.element);
	}
}
