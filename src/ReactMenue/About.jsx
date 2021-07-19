import React from 'react'
import Common from './Common'
import beachresort from '../Images/about.svg'


function About() {
    return (
        <>
           <Common 
                name= "Welcome to Firefaly"
                title="Life is either a daring adventure or nothing at all"
                imgsrc={beachresort}
                visit = "/service"
                btnname = "Get Started"
            />  
        </>
    )
}
export default About;
