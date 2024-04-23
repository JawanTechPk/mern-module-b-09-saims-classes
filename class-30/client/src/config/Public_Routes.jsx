import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const Public_Routes = () => {
  const {isLoggedIn} = useSelector((store)=>store.user_data)
  return (
    !isLoggedIn ? <Outlet /> : <Navigate to='/' />
  
  )
}

export {Public_Routes}
