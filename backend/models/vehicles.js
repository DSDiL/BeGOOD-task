const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehicleSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    variant: {
        type: String,
        required: true
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;