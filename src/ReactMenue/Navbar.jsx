import React from 'react'
import { NavLink } from "react-router-dom";
import '../index.css'
import Logo from '../Images/logo.png'

function Navbar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container-fluid">
                        
                            <img src = {Logo} alt="Logo" className="img-fluid" />
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link"  exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/service">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/galary">Galary</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                        </ul>      
                        </div>
                    </div>
                    </nav>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Navbar;