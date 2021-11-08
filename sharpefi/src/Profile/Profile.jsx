import React from 'react'
import HeaderAuth from '../Home/HeaderAuth'
import ProfileAlgo from '../Components/ProfileAlgo'

const Profile = () => {
  return (
    <div style={{
      width: 800,
      margin: '0 auto'
    }}>
      <HeaderAuth />
      <ProfileAlgo />
      <ProfileAlgo />
      <ProfileAlgo />
    </div>
  )
}

export default Profile
