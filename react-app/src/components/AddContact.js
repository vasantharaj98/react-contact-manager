import React, { Component } from 'react';

 class AddContact extends Component {
     state ={
         name:"",
         email:""
     }
     add=(e)=>{
         e.preventDefault();
        //  console.log(this.state);
         if(this.state.name==='' || this.state.email===''){
             alert('you must be fill all details');
             return;
         };
         this.props.addEventHandler(this.state);
         this.setState({name:"", email:""});
         this.props.history.push('/');
     }
    render() {
        return (
            <div className="container" style={{maxWidth: '540px'}}>
                <nav className="navbar navbar-light">
                <div>
                <h1 className="navbar-brand mb-0 h1 ">Add Contact</h1>
                </div>
            </nav>
                <form onSubmit={this.add}>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name"  aria-describedby="emailHelp" value={this.state.name} onChange={(e)=>{return( this.setState({name:e.target.value}));}}/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email"  aria-describedby="emailHelp" value={this.state.email} onChange={(e)=>{return( this.setState({email:e.target.value}));}}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        )
    };
};
export default AddContact;