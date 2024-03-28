import React from 'react'
import './Profile.css'

const Profile = (props) => {

    const {name,imgURL,phone,email} = props.profile
  return (
    <div className='main'>
        <h1>My Contacts</h1>
        <div>
            <div>
                <h2>{name}</h2>
                <img src={imgURL} alt="" />
          
            </div>
            <div>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
