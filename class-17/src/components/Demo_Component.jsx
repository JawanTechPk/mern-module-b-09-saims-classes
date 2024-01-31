import React from 'react'

export const Demo_Component = (props) => {
    const {children, title} = props
  return (
    <div>
       {title}


        <div>
{children}
        </div>
    </div>
  )
}
