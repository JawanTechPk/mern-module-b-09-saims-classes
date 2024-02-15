import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const user = true
const Private_Routes = () => {
  return (
    user ? <Outlet /> : <Navigate to='/login' />
  
  )
}

export {Private_Routes}
