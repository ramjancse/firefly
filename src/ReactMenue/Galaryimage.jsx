import React from 'react'
import { NavLink } from "react-router-dom";


export default function Galaryimage(props) {
    
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
                <div className="card galary">
                    <NavLink to="#"> 
                        <img src={props.imgSrc} className="card-img-top galary" alt=" not found" />
                    </NavLink>
                </div>
            </div>
        </>
    )
}
