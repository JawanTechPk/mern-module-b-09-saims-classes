import React from 'react'
import { useParams } from 'react-router-dom'

export const Users = () => {
  const params = useParams()

  console.log('params', params.id)
  return (
    <div>User Id: {params.id}</div>
  )
}
