import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
const params = useParams();
console.log(params)
  return (
    <>
    <div>User</div>

{
    params.username
}
</>
  )
}

export default User