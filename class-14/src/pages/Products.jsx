import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../../utils/data'


export const Products = () => {
  const navigate = useNavigate()

  const navigate_handle = (id) =>{
    console.log('clicked')

    if(id == 21){
      navigate(`/products/${id}`)

    }
    
    // navigate('/products/21')
    // navigate(`/`)
  }

  return (
    <>
    {
      data.map((pro, index)=>{
        const {id,title, price} = pro
       return <div>
          <h1>
            {title}
          </h1>
          <h3>
            Price: {price}
          </h3>
          <h3>
            Id: {id}
          </h3>

          <button onClick={()=>navigate_handle(id)}>
            View Details
          </button>
          {/* <Link to={`/products/${id}`}>
          View Details
          </Link> */}
        </div>
      })
    }
    </>
  )
}
