import React from 'react'
import HeaderUnAuth from './HeaderUnAuth'
import { useParams } from 'react-router-dom'
import { Button } from 'antd'
import AlgoChart from '../Chart/AlgoChart'
import AlgoInfo from '../Components/AlgoInfo'
const AlgoDetails = () => {
  const { algoId } = useParams()
  return (
    <div style={{
      width: 800,
      margin: '0 auto'
    }}>
      <HeaderUnAuth />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 40
      }}>
        <div style={{fontSize: 20, textAlign: 'left'}}>
          <div style={{fontWeight: 'bold'}}>{`Algorithm Name ${algoId}`}</div>
          <div>Description of algorithm:</div>
        </div>
        <Button size="large" style={{width: 150, background: '#55efc4', border: 'none'}}>Invest</Button>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <AlgoChart />
        <AlgoInfo width='45%' height={400} />
      </div>
      
    </div>
  )
}

export default AlgoDetails