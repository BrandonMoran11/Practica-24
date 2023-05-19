const express = require('express');
const mongoose = require('mongoose');
const personsRoutes = require('./routes/persons');
require('dotenv').config();

mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(personsRoutes);
app.use("/assets", express.static(__dirname + "/public"));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectando a TEST'))
    .catch((error) => console.error(error));


app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));