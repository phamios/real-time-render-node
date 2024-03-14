import React from 'react'
// import Orders from './Orders'
import '../index.css'
import Leaflet from './Leaflet'
import Navbar from "./Navbar"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Leaflet /> 
    </div>
  )
}
