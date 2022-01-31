const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT;

const routes = require('./routes/index.router');
app.use('/', routes);

app.listen(port || 3000, () => {
    console.log(`Server has been started on ${port} port`);
});