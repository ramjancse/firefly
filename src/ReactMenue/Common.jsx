import React from 'react'
import {NavLink} from 'react-router-dom'



function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-item-center my-5"> 
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 col-10 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <span className="brand"> </span> </h1>
                                    <h5 className="my-3">  {props.title} </h5>
                                    <div className="mt-3">
                                        <NavLink className="btn btn-outline-primary" to={props.visit} > {props.btnname} </NavLink> 
                                    </div>
                                </div>
                                <div className="col-md-6 col-10 mx-auto">
                                    <img src={props.imgsrc} alt="not found" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-10 mx-auto"> 
                        <p className="textAbout">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Tempore nam eveniet necessitatibus soluta, inventore, 
                            incidunt veritatis distinctio placeat quia, nisi quam 
                            illum at et assumenda asperiores exercitationem. Iusto non 
                            debitis nostrum tenetur repudiandae, ipsa ad illo voluptates 
                            quidem nesciunt corrupti. Minus, animi vitae laborum, ab dicta 
                            atque nisi quam labore laudantium libero eaque non? Perferendis 
                            nobis unde animi dicta natus voluptas mollitia libero harum 
                            tempora quidem aperiam neque, in sit quaerat culpa, rerum sunt 
                            voluptates cupiditate distinctio nam doloremque quisquam. Quas 
                            blanditiis at dolorem ipsa minima assumenda modi dolores eum 
                             quis, aut quaerat neque laudantium iure obcaecati placeat 
                            cum incidunt? Voluptatem nisi placeat, accusantium expedita
                            possimus hic, atque aut cumque qui officia quod, inventore 
                            sed dicta. Voluptatem quos doloremque temporibus mollitia 
                            sapiente vel totam sint repellat, esse iste quaerat animi 
                            repellendus libero illo commodi eaque. Et maiores officia impedit, 
                            nihil accusantium mollitia maxime sunt consequatur temporibus 
                            pariatur aliquam velit accusamus quibusdam saepe quis placeat 
                            consectetur aut, repellendus atque alias dolores. Ipsum magni 
                            dolorem rem assumenda non omnis, facere id velit possimus culpa 
                            tenetur ex quod ratione. Quam fuga minima sapiente harum itaque 
                            corrupti, deleniti impedit illum debitis officiis. Accusamus 
                            voluptas, ab sunt obcaecati dolorum ipsa reprehenderit 
                            exercitationem aliquid optio autem?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}
export default Common;
