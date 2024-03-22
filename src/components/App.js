import {React, useState, useEffect} from 'react'
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { uuid } from 'uuidv4';
// const contacts = [
//   {
//     id: '1',
//      name : 'dipesh',
//      email:'dipesh@gmail.com',
//   }
//   ,
//   {
//     id: '2',
//      name : 'tarun',
//      email:'tarun@gmail.com',
//   },
//   {
//     id: '3',
//      name : 'varun',
//      email:'varun@gmail.com',
//   }
// ]



function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler =(contact)=> {
    console.log('contact', contact)

    setContacts([...contacts, contact]);
    }

    const deleteContact=(email)=> {
      console.log('clciked delete', email)
      const filteredContacts= contacts.filter((contact)=> contact.email !== email);
      setContacts(filteredContacts)
    }


    useEffect(()=> {
      const retriveContancts  = JSON.parse(localStorage.getItem("contacts"));
      if (retriveContancts) setContacts(retriveContancts)
    },[])

    useEffect(()=> {
    localStorage.setItem("contacts", JSON.stringify(contacts));   
    },[contacts]);

    
    
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
