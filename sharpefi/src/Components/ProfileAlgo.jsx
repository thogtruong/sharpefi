import React from 'react'
import { Button } from 'antd'

const ProfileAlgo = () => {
  return (
    <div style={{
      padding: '20px 40px',
      width: '100%',
      lineHeight: 2,
      fontSize: 20,
      textAlign: 'left',
      boxShadow: '4px 4px 15px 2px rgba(66,66,66,0.25)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '40px auto'
    }}>
      <div>
        <div style={{fontWeight: 'bold'}}>Algorithm Name 1</div>
        <div>Invested On:</div>
        <div>Invested Amount:</div>
        <div>Returns:</div>
      </div>
      <div>
        <Button size="large" style={{width: 150, background: '#55efc4', border: 'none', marginRight: 20}}>Invest</Button>
        <Button  size="large" type="default">Withdraw</Button>
      </div>
    </div>
  )
}

export default ProfileAlgo