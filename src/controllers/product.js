import {
    Product
} from '../models/product'

exports.list = () => async (req, res) => {
    try {

        const productData = await Product.findAll();
        return res.json(productData);

    } catch (err) {
        return res.send(err);
    }
};

exports.create = () => async (req, res) => {
    try {
        const createProduct = await Product.create(req.body);

        res.status(201).json({
            'status': 'OK',
            'messages': "Product berhasil ditambahkan",
            'data': createProduct,
        })
    } catch (err) {
        return res.send(err);
    }
};

exports.update = () => async (req, res) => {
    try {
        const updateProduct = await Product.update();

        res.json({
            'status': 'OK',
            'messages': 'Product berhasil diupdate',
            'data': updateProduct,
        })
    } catch (err) {
        return res.send(err)
    }
};

exports.delete = () => async (req, res) => {
    try {
        const deleteProduct = await Product.delete();

        res.json({
            'status': 'OK',
            'messages': 'Product deleted',
            'data': deleteProduct,
        })
    } catch (err) {
        return res.send(err);
    }
}