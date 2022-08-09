const express = require("express");
let Vehicle = require("../models/vehicles");
const router = express.Router();

let variant;

const PlateValidater = (plate) => {
    const regex1 = /^\d{2}\s?ශ්‍රී\s?\d{4}$/i;
    const regex2 = /^\d{2}\s?-\s?\d{4}$/i;
    const regex3 = /^([A-Z]{2}\s)?[A-Z]{2,3}\s?-\s?\d{4}$/i;

    if (regex1.test(plate)) {
        variant = "Vintage";
    }
    else if (regex2.test(plate)) {
        variant = "Old";
    }
    else {
        variant = "Modern";
    }
    
    return variant;
}

router.post('/', async (req, res) => {

    const {name, nic, mobile, model, plate} = req.body;

    PlateValidater(plate);

    const vehicle = new Vehicle({
        name,
        nic,
        mobile,
        model,
        plate,
        variant
    })

    await vehicle.save().then((variant) => {
        res.json(variant);
    }).catch((err) => {
        console.log(err);
    }) 
});

router.get('/get', async (req, res) => {

    await Vehicle.find().then((vehicles) => {
        res.json(vehicles);
    }).catch((err) => {
        console.log(err);
    });  
});

router.put('/update/:id', async (req, res) => {
    let id = req.params.id;
    const {name, nic, mobile, model, plate} = req.body;

    PlateValidater(plate);

    const data = {
        name,
        nic,
        mobile,
        model,
        plate,
        variant
    }

    await Vehicle.findByIdAndUpdate(id, data).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
})

router.route('/delete/:id').delete(async (req, res) => {
    let id = req.params.id;

    await Vehicle.findByIdAndDelete(id).then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err)
    })
})

module.exports = router;