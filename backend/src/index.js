const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);

app.listen(2139);


//npm init -y
// yarn add body-parser, yarn add express, yarn add mongoose
//É utiliza o express para rotas