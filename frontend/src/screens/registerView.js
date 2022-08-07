import React, { useState } from 'react';
import "./style.css";

function Register() {

    const [name, setName] = useState();
    const [nic, setNic] = useState();
    const [address, setAddress] = useState();
    const [mobile, setMobile] = useState();
    const [model, setModel] = useState();
    const [year, setYear] = useState();
    const [plate, setPlate] = useState();



    return (
        <div className='container-sm'>
            <form className="row row g-4 justify-content-center" id='form'>
                <div className='text-center'>
                    <h2>Vehicle Registration Application</h2><br/>
                </div>
                <div className="col-8">
                    <label for="nameLabel" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="NicLabel" className="form-label">NIC Number</label>
                    <input type="text" className="form-control" id="nic" onChange={(e) => setNic(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="AddressLabel" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="MobileLabel" className="form-label">Mobile Number</label>
                    <input type="text" className="form-control" id="mobile" onChange={(e) => setMobile(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="ModelLabel" className="form-label">Vehicle Model</label>
                    <input type="text" className="form-control" id="model" onChange={(e) => setModel(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="YearLabel" className="form-label">Year of Manufacture</label>
                    <input type="text" className="form-control" id="year" onChange={(e) => setYear(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label for="PlateLabel" className="form-label">License Plate</label>
                    <input type="text" className="form-control" id="plate" onChange={(e) => setPlate(e.target.value)}/>
                </div>
                <div className="submit">
                    <button type="submit" className="btn btn-success btn-lg" id="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register;