var ProductsView = Backbone.View.extend({
	
	template: _.template('<label>Products:<ul class="products"></ul></label>'),

	$products: null, 

	render: function() {		
		var html = this.template();
		this.$el.html(html);
		this.$products = this.$el.find('.products');
		this.model.deferred.done(this.renderProducts.bind(this));
		this.model.deferred.fail(this.fetchFailed.bind(this));
		return this;
	},

	renderProducts: function() {
		var productViews = this.createProductViews();
		var fragment = this.getProductElements(productViews);
		this.$products.append(fragment);
	},

	createProductViews: function(){
		var productViews = [];
		this.model.models.forEach(function(productModel){
			var productView = new ProductView({model: productModel});
			productViews.push(productView);
		});
		return productViews;
	},

	getProductElements: function(productViews) {
		var fragment = document.createDocumentFragment();
		productViews.forEach(function(productView){
			var el = productView.render().el;
			fragment.appendChild(el);			
		});
		return fragment;
	},

	fetchFailed: function() {
		this.$products.append('<li>fetch failed, please refresh</li>');
	}

});