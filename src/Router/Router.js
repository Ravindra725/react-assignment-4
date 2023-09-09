import React from 'react'
import About from './About'
import Home from './Home'
import Table from './Table'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router(){
    return(
        <>
        <BrowserRouter>
        {/* <link to='/about'>About</link>
        <link to='/home'>Home</link>
        <link to='/table'>Table</link> */}
        <Routes>
          {/* <Route path='/' element= { <Home />} /> */}
          <Route path= '/about' element={<About />} /> 
          <Route path= '/table' element= {<Table />} />
          {/* <Route path= '/table' element ={<Table />} /> */}
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router