import React from 'react'
import { Button } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      width: 800,
      display: 'flex',
      justifyContent: 'flex-start',
      columnGap: 30,
      height: 40,
      margin: '60px auto'
    }}>
      <Button size="large" style={{width: 150}} type="primary">
        Popular
        <UpOutlined />
      </Button>
      <Button size="large" style={{width: 150}} type="primary">
        Newest
        <UpOutlined />
      </Button>
      <Button size="large" style={{width: 150}} type="primary">
        Filter
        <UpOutlined />
      </Button>
      <Button size="large" style={{width: 150}} type="default" onClick={() => navigate('/profile')}>
        Log In
      </Button>
    </div>
  )
}

export default Header