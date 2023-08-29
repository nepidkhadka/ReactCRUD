import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`)
      .then(
        response => setValues(response.data),
      ).catch(err => setError(err.message))
  }, [])

  const [values, setValues] = useState({
    name: '',
    email: '',
    gender: '',
    company: ''
  })
  console.log(values);

  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log("HEllO",values )
    axios.put("http://localhost:3000/users/"+id, values)
    .then(res=>{
      console.log(res)
      navigate('/')
    })
    .catch(
      err=>console.log(err)
    );
  }

  return (
    <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className='w-75 rounder bg-white border shadow p-4' >
        <h1 className='text-center'>Update User</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input type="text" value={values.name} name='name' onChange={e=>setValues({...values, name : e.target.value})} className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" value={values.email} name='email' onChange={({target})=>setValues({...values, email : target.value})} className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
          </div>
          <div className="col-md mb-3">
            <label htmlFor="inputState" className="form-label">Gender:</label>
            <select id="inputState" selected={values.gender} onChange={({target})=>setValues({...values, gender : target.value})} name='gender' className="form-select">
              <option disabled>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Company:</label>
            <input type="text" name='company' value={values.company} onChange={({target})=>setValues({...values, company : target.value})} className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" />
            {/* <input type="text" onChange={e => setValues({ ...values, company: e.target.value })} name='company' className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" /> */}

          </div>
          <button type='Submit' className='btn btn-lg btn-success mx-2 my-4'>Submit</button>
          <Link to="/" className='btn btn-lg btn-info my-4'>Back</Link>

        </form>
      </div>
    </div>
  )
}

export default Update