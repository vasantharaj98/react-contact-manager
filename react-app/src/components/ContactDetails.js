import React from 'react';

function ContactDetails(props) {
    const {name, email} = props.location.vasanth.contacts;
    return (
        <div className='container' style={{maxWidth:'540px'}}>
             <nav className="navbar navbar-light">
                <div>
                <h1 className="navbar-brand mb-0 h1 ">Contact Details</h1>
                </div>
                </nav>
             <div className="col-8">
                <div className="card-body">
                    <h5 className="card-title">Name:{name}</h5>
                    <h5 className="card-title">Email:{email}</h5>
                </div>
                </div>
        </div>
    )
}

export default ContactDetails;
