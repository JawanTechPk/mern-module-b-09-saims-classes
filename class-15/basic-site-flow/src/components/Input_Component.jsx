import { TextField } from '@mui/material'
import React from 'react'

export const Input_Component = (props) => {
    const {placeholder,type, id, onChange,required } = props
  return (
    <TextField 
    required={required}
    placeholder={placeholder}
    type={type}
    id={id}
    onChange={onChange}
     />
  )
}
