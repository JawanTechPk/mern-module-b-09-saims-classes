import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Private_Routes = () => {
  const {isLoggedIn} = useSelector((store)=>store.user_data)
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/login' />
  
  )
}

export {Private_Routes}
