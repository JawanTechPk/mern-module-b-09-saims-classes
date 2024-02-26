import React from 'react'

const Custom_Button = (props) => {
  return (
    <div>
      <button className='bg-primary_color w-full py-3 text-white font-bold rounded-md' {...props}>
        {props.children}
      </button>
    </div>
  )
}

export { Custom_Button}
