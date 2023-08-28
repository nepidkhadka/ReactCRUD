import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: '',
        company: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3000/users", values)
            .then(response => {
                    console.log(response);
                    navigate('/')
                }
            ).catch(err => setError(err.message))
    }


    console.log(values);
    return (
        <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className='w-75 rounder bg-white border shadow p-4' >
                <h1 className='text-center'>Add A User</h1>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Full Name:</label>
                        <input type="text" onChange={e => setValues({ ...values, name: e.target.value })} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" onChange={e => setValues({ ...values, email: e.target.value })} className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                    </div>
                    <div className="col-md mb-3">
                        <label htmlForfor="inputState" className="form-label">Gender:</label>
                        <select onChange={e => setValues({ ...values, gender: e.target.value })} id="inputState" className="form-select">
                            <option disabled selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company:</label>
                        <input type="text" onChange={e => setValues({ ...values, company: e.target.value })} className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                    </div>
                    <button type='Submit' className='btn btn-lg btn-success mx-2 my-4'>Submit</button>
                    <Link to="/" className='btn btn-lg btn-info my-4'>Back</Link>

                </form>
            </div>
        </div>
    )
}

export default Create