const mongoose = require("mongoose");

const DB_CONNECTION = "mongodb+srv://user:123@begood.krgwumt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB_CONNECTION);

const conn = mongoose.connection;
conn.once('open', () => {
    console.log('successfully connected');
})

module.exports = conn;