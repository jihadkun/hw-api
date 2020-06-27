import product from "../controllers/product";

module.exports = function (app) {

    //products routes
    app.route('/product')
        .get(product.list());

    app.route('product/create')
        .post(product.create());

    app.route('product/update')
        .put(product.update());

    app.route('product/delete')
        .delete(product.delete())

};