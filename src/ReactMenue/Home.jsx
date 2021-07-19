import React from 'react'
import Common from './Common'
import beachresort from '../Images/beachresort.svg'


function Home() {
    return (
        <>
            <Common 
                name= "The world is a book and those who do not travel read only one page"
                title="Not all those who wander are lost"
                imgsrc={beachresort}
                visit = "/contact"
                btnname = "Contact Now"
            />  
        </>
    )
}
export default Home;
