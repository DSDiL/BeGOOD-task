import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Form } from 'react-bootstrap';
import './style.css';

function ViewDetails() {

    const [search, setSearch] = useState();
    const [vehicles, setVehicles] = useState([]);
    const [editID, setEditID] = useState();
    const [edits, setEdits] = useState({
        name: "",
        nic: "",
        mobile: "",
        model: "",
        plate: ""
    });

    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/get").then((res) => {
            setVehicles(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const EditClick = (event, vehicle) => {
        event.preventDefault();
        setEditID(vehicle._id);

        const formValues = {
            name: vehicle.name,
            nic: vehicle.nic,
            mobile: vehicle.mobile,
            model: vehicle.model,
            plate: vehicle.plate
        }
        setEdits(formValues);
    };

    const EditDetails = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const Data = {...edits};
        Data[fieldName] = fieldValue;

        setEdits(Data);
    }

    const EditSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: edits.name,
            nic: edits.nic,
            mobile: edits.mobile,
            model: edits.model,
            plate: edits.plate
        };
        console.log(data);

        axios.put(`http://localhost:5000/api/update/${editID}`, data).then((res) => {
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        })
    }

    const DeleteVehicles = (event, id) => {
        event.preventDefault();

        if (id !== null) {
            axios.delete(`http://localhost:5000/api/delete/${id}`).then((res) => {
            window.location.reload();
            }).catch((err) => {
                console.log(err);
            })
        }
    }

    return (
        <div className='container-sm'>
            <div className="row row g-4 justify-content-center">
                <Form onSubmit={(event) => EditSubmit(event)}>
                    
                    <Form.Group className='text-center'>
                        <h2>Vehicle Details</h2><br/>
                    </Form.Group>

                    <Table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>NIC Number</th>
                                <th>Mobile Number</th>
                                <th>Vehicle Model</th>
                                <th>Vehicle Plate</th>
                            </tr>
                        </thead>
                        <tbody>
                        {vehicles.map(vehicle => 
                        <Fragment>
                            {editID === vehicle._id ? (
                                <tr>
                                    <td>
                                    <Form.Control
                                        className='input-control'
                                        type='text'
                                        name='name'
                                        value={edits.name}
                                        onChange={EditDetails}
                                        required
                                        pattern="[a-zA-Z]+[a-zA-Z ]+" />
                                    </td>
                                    <td>
                                    <Form.Control
                                        className='input-control'
                                        type='text'
                                        name='nic'
                                        value={edits.nic}
                                        onChange={EditDetails}
                                        required
                                        pattern="[0-9Vv]{10}" />
                                    </td>
                                    <td>
                                    <Form.Control
                                        className='input-control'
                                        type='text'
                                        name='mobile'
                                        value={edits.mobile}
                                        onChange={EditDetails}
                                        required
                                        pattern="[00-9]{10}" />
                                    </td>
                                    <td>
                                    <Form.Control
                                        className='input-control'
                                        type='text'
                                        name='model'
                                        value={edits.model}
                                        onChange={EditDetails}
                                        required />
                                    </td>
                                    <td>
                                    <Form.Control
                                        className='input-control'
                                        type='text'
                                        name='plate'
                                        value={edits.plate}
                                        onChange={EditDetails}
                                        required />
                                    </td>
                                    <td>
                                        <Button className='btn btn-success' type='submit'>Save</Button>
                                    </td>
                                </tr>
                            ) : (
                                <tr>
                                    <td>{vehicle.name}</td>
                                    <td>{vehicle.nic}</td>
                                    <td>{vehicle.mobile}</td>
                                    <td>{vehicle.model}</td>
                                    <td>{vehicle.plate}</td>
                                    <td>
                                        <Button type='button' onClick={(event) => EditClick(event, vehicle)} className="btn btn-warning">Edit</Button>
                                    </td>
                                    <td>
                                        <Button type='button' onClick={(event) => DeleteVehicles(event, vehicle._id)} className="btn btn-danger">Delete</Button>
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                        )}    
                        </tbody>
                    </Table>
                </Form>
            </div>
        </div>
    )
}

export default ViewDetails;