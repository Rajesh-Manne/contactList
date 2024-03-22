import React from 'react'
import ContactCard from './ContactCard';
export default function ContactList(props) {
    const {contacts} = props;

 const renderContactList =  contacts?.map( (contact,index)=> {

    return  <ContactCard contact = {contact} key={index} deleteContact={props.deleteContact} id={index}/> 
       
    
 } )

  return (
    <div className='ui celled list'>{renderContactList}</div>
  )
}
