import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './style.css';

function Register() {

    const [name, setName] = useState();
    const [nic, setNic] = useState();
    const [mobile, setMobile] = useState();
    const [model, setModel] = useState();
    const [plate, setPlate] = useState();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    function useRegex(plate) {
        let regex1 = /^\d{2}\s?ශ්‍රී\s?\d{4}$/i;
        let regex2 = /^\d{2}\s?-\s?\d{4}$/i;
        let regex3 = /^([A-Z]{2}\s)?[A-Z]{2,3}\s?-\s?\d{4}$/i;
        
        if ((regex1.test(plate)) || (regex2.test(plate)) || (regex3.test(plate))) {
            return true;
        }
    }

    const RegisterVehicle = (event) => {
        event.preventDefault();

        if (useRegex(plate)) {
            
            const data = {
                name,
                nic,
                mobile,
                model,
                plate
            }
            console.log(data);
    
            axios.post("http://localhost:5000/api/", data).then((res) => {
                setSuccess(`Vehicle registed as a ${res.data.variant} vehicle`);
            }).catch((err) => {
                console.log(err)
            })
        }else {
            setError("Add a valid plate number");
        }   
    }

    return (
        <div className='container-sm'>

            <Form className="row row g-4 justify-content-center" onSubmit={(event) => RegisterVehicle(event)}>
                
                <Form.Group className='text-center'>
                    <h2>Vehicle Registration Application</h2><br/>
                </Form.Group>

                {error && <div id="error"><h6>{error}</h6></div>}
                {success && <div id="success"><h6>{success}</h6></div>}
                
                <Form.Group className='col-8'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        className='input-control'
                        type='text'
                        name='name'
                        onChange={(event) => setName(event.target.value)}
                        required
                        pattern="[a-zA-Z]+[a-zA-Z ]+"
                    />
                </Form.Group>

                <Form.Group className='col-8'>
                    <Form.Label>NIC Number</Form.Label>
                    <Form.Control
                        className='input-control'
                        type='text'
                        name='nic'
                        onChange={(event) => setNic(event.target.value)}
                        required
                        pattern="[0-9Vv]{10}"
                    />
                </Form.Group>

                <Form.Group className='col-8'>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        className='input-control'
                        type='text'
                        name='mobile'
                        onChange={(event) => setMobile(event.target.value)}
                        required
                        pattern="[00-9]{10}"
                    />
                </Form.Group>

                <Form.Group className='col-8'>
                    <Form.Label>Vehicle Model</Form.Label>
                    <Form.Control
                        className='input-control'
                        type='text'
                        name='model'
                        onChange={(event) => setModel(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className='col-8'>
                    <Form.Label>License Plate</Form.Label>
                    <Form.Control
                        className='input-control'
                        type='text'
                        name='plate'
                        onChange={(event) => setPlate(event.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group style={{textAlign: "center", marginTop: "5%"}}>
                    <Button className='btn btn-success btn-lg' type='submit'>Submit</Button>
                </Form.Group>

            </Form>
        </div>
    )
}

export default Register;