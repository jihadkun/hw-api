import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';

import user from './src/routes/users';
import product from './src/routes/product';

const app = express();
const port = 2000;

app.use(bodyParser.json());


//config database
// const sequelize = new Sequelize('toko', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });


user(app);
product(app);



app.listen(port);

console.log('RESTful API server started on: ' + port);