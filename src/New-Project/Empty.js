import React from 'react'
import { useLocation } from 'react-router-dom'

function Empty() {
  const { pathname } = useLocation()
  return (
    <div className="empty">
      <h1>
        Your request to access
        <span style={{ color: 'red' }}>{pathname}</span> page was not found,
        check url
      </h1>
    </div>
  )
}

export default Empty
