import React from 'react'
import Galaryimage from './Galaryimage'
import Galarydata from './Imagedata'

function Galary() {
    return (
        <>
            <div className="container-fluid">
                <div className="text-center headerBorder mx-auto my-5">
                    <h1>Galary </h1>
                </div> 
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Galarydata.map( (value, index)=> {
                                    return <Galaryimage
                                                imgSrc = {value.Imgsrc}
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
export default Galary;
