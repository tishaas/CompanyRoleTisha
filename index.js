const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 8080;
require('dotenv').config();
const cors = require('cors')
const app = express();
const indexModel = require('./Models/indexModel'); // Assuming indexModel is defined in index.js
const models = require('./Models/UserModel');

const userRoutes = require('./Router/User.router');
const userRoleRoutes = require('./Router/UserRole.router');
const roleRoutes = require('./Router/Role.router');
const customerRoutes = require('./Router/Customer.router');


const db = require('./config/db');
const con = require('./config/db');
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('/',userRoutes)
app.use('/',userRoleRoutes)
app.use('/',roleRoutes)
app.use('/',customerRoutes)
// console.log('userRoutes:', userRoutes);
// console.log('userRoleRoutes:', userRoleRoutes);


con.sync({ alter: true }).then(() => {
    console.log("Models synchronized successfully.");
}).catch((error) => {
    console.log(error.message);
});






app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server listening at ${PORT}.`);
});