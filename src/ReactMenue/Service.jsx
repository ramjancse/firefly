import React from 'react'
import Card from './Card'
import Sdata from './ServiceData'

function Service() {
    return (
        <>
            <div className="text-center headerBorder mx-auto my-5">
                <h1> Our Services </h1>
                {/* <hr className="w-25 mx-auto" /> */}
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                        <div className="row gy-4">
                            {
                              Sdata.map( (value, index) => {
                                return <Card 
                                       
                                            title ={value.title} 
                                            desc = {value.des}
                                            imgSrc = {value.imgsrc}
                                        />
                              })  
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;
