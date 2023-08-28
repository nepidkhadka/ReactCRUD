import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return(
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/read/:id' element={<Read/>} />
        <Route path='/update/:id' element={<Update/>} />
        <Route path='/*' element={ <h1>Error</h1> } />
      </Routes>
      </BrowserRouter>
  )

}

export default App
