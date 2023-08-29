import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const {id} = useParams();
  const [error, setError] = useState();
  const [mydata, setMyData] = useState([])


  useEffect(()=>{
          axios.get(`http://localhost:3000/users/${id}`)
          .then(
              response => setMyData(response.data),
          ).catch(err => setError(err.message))
  }, [])

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className="w-50 border bg-white shadow px-5 pt-4 pb-5 rounded">
        <h2 className='text-center py-4'>Users Details</h2>
            <div className="mb-3">
              <h4>Name:{mydata.name}</h4>
            </div>
            <div className="mb-3">
              <h4>Gender:{mydata.gender}</h4>
            </div>
            <div className="mb-3">
              <h4>Company:{mydata.company}</h4>
            </div>
            <div className="mb-4">
              <h4>Email:{mydata.email}</h4>
            </div>
            <Link className='btn btn-success' to={"/update"+mydata.id} >Update</Link>
            <Link className='btn btn-warning ms-3' to="/" >Go Back</Link>
      </div>
      
    </div>
  )
}

export default Read