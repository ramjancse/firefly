import React, {useState} from 'react'


function Contact() {
    
    const [data, setData]  = useState({
        name: '',
        phone: '',
        email:'',
        message:''
    });

    const InputEvent = (e)=>{
        const {name, value} = e.target;
        setData( (preVal)=> {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    
    const submitForm = (e)=>{
        e.preventDefault();
        
        alert(` 
                Name:  ${data.name}. 
                Mobile: ${data.phone}.
                Email: ${data.email}.
                Message: ${data.message} `
            );
        // console.log('object');
        
            
    }
   
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="container">
                <div className="row"> 
                    <div className="col-md-6 mx-auto">
                    <form action="" onSubmit={submitForm} name="contact-form">
                        <div className="form-group">
                            <label for="" className="mb-2">Full Name</label>
                            <input  
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={InputEvent} 
                                className="form-control" 
                                id="name"
                                placeholder="Full Name"
                                required 
                            />
                        </div>

                        <div className="form-group my-4">
                            <label for="" className="mb-2">Phone Number</label>
                            <input  
                                type="number"
                                name="phone" 
                                value={data.phone}
                                onChange={InputEvent}
                                className="form-control" 
                                id="phone"
                                placeholder="Phone number" 
                                 required
                            />
                        </div>
                        <div className="form-group my-4">
                            <label for="" className="mb-2">Email Addres</label>
                            <input  
                                type="email"
                                name="email"
                                value={data.email} 
                                onChange={InputEvent}
                                className="form-control my-2" 
                                id="email"
                                placeholder="Email Address"
                                 required 
                            />
                        </div>
                        <div class="form-group my-4">
                            <label for="">Message</label>
                            <textarea 
                                className="form-control rounded-0" 
                                id="message" 
                                rows="3"
                                name="message"
                                value={data.message}
                                onChange={InputEvent}
                                required
                            >

                            </textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-outline-primary my-2">Submit
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Contact;
