import React from 'react'
import Dashboard from './components/dashboard'

function student() {
  console.log("ADMIN DASSSSSHBOARDDD")
  const {data} = useLocation();
  console.log(data)

  return (
    <Dashboard/>
  )
}

export default student
