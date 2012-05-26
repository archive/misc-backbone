var ProductsModel = Backbone.Collection.extend({	
	
	model: ProductModel,

	url: '../../server/services/products.json',

	deferred: null,

	initialize: function() {
		this.deferred = this.fetch();
	}

});

