var ProductView = Backbone.View.extend({	
	
	template: _.template('<span class="name"><%= name %></span><span class="price"><%= price %></span>'),

	tagName: 'li',

	render: function () {
		var html = this.template(this.model.attributes);
		this.$el.html(html);
		return this;
	}

});