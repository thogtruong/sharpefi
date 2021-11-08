import React from 'react'

const AlgoInfo = () => {
  return (
    <div style={{
      padding: '20px 40px',
      width: '45%',
      lineHeight: 2,
      fontSize: 20,
      textAlign: 'left',
      boxShadow: '4px 4px 15px 2px rgba(66,66,66,0.25)',
      cursor: 'pointer'
    }}>
      <div>Metrics</div>
      <div>Sharpe Ratio:</div>
      <div>Returns:</div>
      <div>Current Liquidify:</div>
      <div>Max Draw Down:</div>
      <div>Others:</div>
    </div>
  )
}

export default AlgoInfo