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

    const handleOnChange =(e) =>{
        const {name , value} = e.target;
        setValues((prev)=>({...prev, [name] :value})
        )
    }

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
                        <input type="text" onChange={handleOnChange} name='name' className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input type="email" onChange={handleOnChange} name='email' className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                    </div>
                    <div className="col-md mb-3">
                        <label htmlFor="inputState" className="form-label">Gender:</label>
                        <select onChange={handleOnChange} id="inputState" name='gender' className="form-select">
                            <option disabled selected>Choose...</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company:</label>
                        <input type="text" onChange={handleOnChange} name='company' className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
                        {/* <input type="text" onChange={e => setValues({ ...values, company: e.target.value })} name='company' className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" /> */}

                    </div>
                    <button type='Submit' className='btn btn-lg btn-success mx-2 my-4'>Submit</button>
                    <Link to="/" className='btn btn-lg btn-info my-4'>Back</Link>

                </form>
            </div>
        </div>
    )
}

export default Create