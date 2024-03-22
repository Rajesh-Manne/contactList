import React from 'react'

export default function ContactCard(props) {
       const {contact, id} = props;
  return (
    <div className='item'>
       <div className='content'>
         <div className='header'>
              {contact.name}
              {contact.email}
         </div>
          <i className='trash alternate  outline icon' style={{color:'red', marginTop:"7px"}} onClick={()=>props.deleteContact(contact.email)}>delete</i>
       </div>

    </div>
  )
}
