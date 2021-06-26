import React,{useState, useEffect} from 'react';
import AddContact from './AddContact';
import api from '../api/serverapi';
import './App.css';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import Header from './Header';
import { uuid } from 'uuidv4';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [contacts, setContacts]= useState([]);
  const [search, setsearch]= useState('');
  const [searchResult, setSearchResult]= useState([]);

  // const retrieveContacts = async()=>{
  //   const response = await api.get("/contacts");
  //   return response.data;
  // }

  const addEventHandler =async (contact) =>{
    const request = {
      id:uuid(),
      ...contact}
      const response = await api.post("/contacts", request);
   return(
     
      setContacts([response.data, ...contacts ])
   );
  };
  const updateEventHandler=async (contact)=>{
          const response = await api.put(`/contacts/${contact.id}`, contact);
          const {id, name, email} = response.data;
          setContacts(contacts.map((contact)=>{
            return contact.id === id ? {...response.data} : contact ;
          }))
  };
  const searchTerm=(word)=>{
    setsearch(word);
    if(search !== ""){
      const newContactList = contacts.filter((contact)=>{
       return Object.values(contact).join('').toLowerCase().includes(search.toLowerCase()); 
      })
      setSearchResult(newContactList);
    }
    else{
      setSearchResult(contacts);
    }
  }
  const removeEventHandler=async (id)=>{
     const response=await api.delete(`/contacts/${id}`);
     console.log(response.data);
   const newContacts = contacts.filter((contact)=>{
          return  contact.id !== id;
        })
        setContacts(newContacts);
  };
  useEffect(()=>{
    // const retrieveContacts=JSON.parse(localStorage.getItem('vasanth'));
    const retrieveContacts = async()=>{
      const response = await api.get("/contacts");
      // return response.data;
      setContacts(response.data);
    }
    retrieveContacts();
    // const getAllcontacts = async () =>{
    //   const allcontacts = await retrieveContacts();
    //   if(allcontacts) setContacts(allcontacts);
    // }
    // getAllcontacts();
  },[])
  // useEffect(()=>{
  //   localStorage.setItem('vasanth',JSON.stringify(contacts));
  // },[contacts]);
  // const contacts = [{
  //   name: 'vasanth',
  //   email: 'vasantharaj1998t@gmail.com'
  // },
  // {
  //   name: 'vasanthraj',
  //   email: 'vasantharaj.t@gmail.com'
  // }];
  return (
    <div>
      <Router>
          <Header/>
          <Switch>
            <Route
            path='/'
            exact
            render={(props)=>
            ( <ContactList {...props} 
              contacts={search.length > 0 ? searchResult:contacts} 
              removeContacthandler={removeEventHandler}
              term={search}
              searchKeyword={searchTerm}
              />)}
            />
            <Route
            path='/add'
            render={(props)=>(
              <AddContact {...props} addEventHandler={addEventHandler}/>
            )}
            />
            <Route
            path='/contactdetails/:id'
            component={ContactDetails}/>
            <Route
            path='/edit/:id'
            render={(props)=>(<EditContact {...props}
              component={EditContact}
              updateContactHandler={updateEventHandler}/>
              )}
           />
          </Switch>
      </Router>
     
     {/* <AddContact addEventHandler={addEventHandler}/>
     <ContactList contacts={contacts} removeContacthandler={removeEventHandler}/> */}
    </div>
  );
}

export default App;
