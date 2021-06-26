import React from 'react';
import { Link } from 'react-router-dom';

function Contactcard(props) {
    const {name, email, id} = props.contacts;
    return (
        <div>
             <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-8">
                <div className="card-body">
                    <Link to={{pathname:'/contactdetails/${id}', vasanth: {contacts: props.contacts}}}>
                    <h5 className="card-title">{name}</h5>
                    <h5 className="card-title">{email}</h5>
                    </Link>
                </div>
                </div>
                <div className="card-body col-2">
                <Link to={{pathname:`/edit/${id}`, state:{vasanth:props.contacts} }}>
                <button href="#" className="btn btn-primary me-2 mt-3">Edit</button>
                </Link>
                <button href="#" className="btn btn-outline-primary mt-3" onClick={()=>props.deleteContact(id)}>Delete</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contactcard;
