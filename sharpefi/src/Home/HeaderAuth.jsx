import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      width: 800,
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 30,
        height: 40,
        margin: '60px auto'
      }}>
        <div style={{fontSize: 20, fontWeight: 'bold'}}>My Portfolio</div>
        <Button size="large" style={{width: 150}} type="default" onClick={() => navigate('/')}>
          Log Out
        </Button>
      </div>
      
    </div>
  )
}

export default Header