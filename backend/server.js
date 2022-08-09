const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const VehicleRoutes = require('./routes/vehicle');
//require("./db")

const app = express();

app.use(express.json());
app.use(cors());

const DB_CONNECTION = "mongodb+srv://user:123@begood.krgwumt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION);

const conn = mongoose.connection;
conn.once('open', () => {
    console.log('successfully connected');
})

app.listen(5000);

app.use('/api', VehicleRoutes);