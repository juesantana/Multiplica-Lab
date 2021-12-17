require('dotenv-safe').config();
const express = require('express');
const cors = require ('cors');
const database = require ('./database/config');
const multiplicaRoutes = require('./routes/multiplicaLabRoutes');
const escolasRoutes = require ('./routes/escolasRoutes')

const app = express ();

app.use(cors());
app.use(express.json());

database.connect();

app.use("/", multiplicaRoutes);
app.use("/escolas", escolasRoutes);


module.exports = app