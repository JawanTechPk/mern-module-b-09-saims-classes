import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../../utils/data'

export const Product_Details = () => {
  const params = useParams()

  const filtered_data = data.filter((pro)=> {
   return pro.id == params.id
  })

  console.log(filtered_data)



  return (
    <div>Product_Details {params.id}</div>
  )
}
