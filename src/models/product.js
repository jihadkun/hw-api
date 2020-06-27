import Sequelize from 'sequelize';

const sequelize = new Sequelize('toko', 'root', 'alchemist23', {
    host: 'localhost',
    dialect: 'mysql'
});

const Model = Sequelize.Model;
class Product extends Model {}
Product.init({
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
});
sequelize.sync({
    alter: true
})

export {
    Product
}