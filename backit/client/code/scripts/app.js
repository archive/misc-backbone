var productsModel = new ProductsModel();
var productsView = new ProductsView({model: productsModel});

$('#app').html(productsView.render().el);

// dispose?