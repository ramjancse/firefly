import React from 'react'
import {NavLink} from 'react-router-dom'


function Card(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
                <div className="card">
                    <img src={props.imgSrc} className="card-img-top" alt=" not found" />
                    <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <NavLink to="/" className="btn btn-primary">Go somewhere </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
