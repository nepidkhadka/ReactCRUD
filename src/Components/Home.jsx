import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [mydata, setMyData] = useState([])
    const [error, setError] = useState()
    useEffect(()=>{
            axios.get("http://localhost:3000/users")
            .then(
                response => setMyData(response.data),
            ).catch(err => setError(err.message))
    }, [])
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>Users List</h1>
        <h2>{error}</h2>
        <div className='w-75 rounder bg-white border shadow p-4' >
        <div className="d-flex justify-content-end">
            <Link to="/create" className='btn btn-lg btn-success'> Add + </Link>
        </div>
                <table className='table table-striped' >
                    <thead className='text-center' >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Company</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mydata.map((data, i) =>(
                                <tr key={i} >
                                    <td className='text-center' >{data.id}</td>
                                    <td className='text-center'>{data.name}</td>
                                    <td className='text-center'>{data.gender}</td>
                                    <td className='text-center'>{data.company}</td>
                                    <td className='text-center'>{data.email}</td>
                                    <td>
                                        <Link to={`/read/${data.id}`} className='btn btn-sm btn-warning mx-2 text-center' >Read</Link>
                                        <button className='btn btn-sm btn-primary mx-2 text-center' >Edit</button>
                                        <button className='btn btn-sm btn-danger mx-2 text-center' >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>
    </div>
  )
}

export default Home