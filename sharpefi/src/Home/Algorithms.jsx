import React from 'react'
import { useNavigate } from 'react-router'

const Algorithm = ({name}) => {
  const navigate = useNavigate()
  return (
    <div style={{
      padding: '20px 40px',
      width: '45%',
      lineHeight: 2,
      fontSize: 20,
      textAlign: 'left',
      boxShadow: '4px 4px 15px 2px rgba(66,66,66,0.25)',
      cursor: 'pointer'
    }}
      onClick={() => navigate(`/algorithm/${name}`)}
    >
      <div style={{fontWeight: 'bold'}}>{`Algorithm Name ${name}`}</div>
      <div>Sharpe Ratio:</div>
      <div>Liquidity:</div>
      <div>Returns:</div>
    </div>
  )
}

const Algorithms = () => {
  
  return (
    <div style={{
      width: 800,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      rowGap: 60,
      margin: '60px auto',
      paddingBottom: 100
    }}>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Algorithm name="1" />
        <Algorithm name="2" />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Algorithm name="3" />
        <Algorithm name="4" />
      </div>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Algorithm name="5" />
        <Algorithm name="6" />
      </div>
    </div>
  )
}

export default Algorithms