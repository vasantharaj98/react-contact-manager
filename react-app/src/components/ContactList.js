import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import Contactcard from './Contactcard';

function ContactList(props) {
    const inputE1 = useRef("");
    // console.log(props);
    const RendercontactList = props.contacts.map((contact)=>{
        return(
        <Contactcard contacts={contact} key={contact.id} deleteContact={(id)=>{props.removeContacthandler(id);}}/>
        );  
    });
    const searchText=()=>{
            props.searchKeyword(inputE1.current.value);
    }
    return (
        <div className='container' style={{maxWidth: '540px'}}>
             <nav className="navbar navbar-light">
                <div>
                <h1 className="navbar-brand mb-0 h1 ">Contact List</h1>
                </div>
                <div>
                <Link to='/add'>
                <button className="btn btn-primary me-2 mt-2">Add Contact</button>
                </Link>
                
                </div>
            </nav>
            <form className="d-flex">
                <input 
                ref={inputE1}
                className="form-control mb-3" 
                style={{maxWidth:'300px'}} 
                type="search" 
                placeholder="Search Contact" 
                aria-label="Search" 
                value={props.term}
                onChange={searchText}/>
            </form>
           {RendercontactList.length <1 ? <h1>No Contacts</h1> : RendercontactList }
        </div>
    )
}

export default ContactList;
