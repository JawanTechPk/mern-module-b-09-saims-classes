import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'

export const Select_Menu = (props) => {
  const {on_change_handle} = props
  return (
    <Stack >
      <FormControl sx={{width:150}} >
        <InputLabel id="demo-simple-select-autowidth-label">Price: Sort by</InputLabel>
        <Select
        
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          // value={age}
          onChange={(e)=>on_change_handle(e.target.value)}
          autoWidth
          label="Price: Sort by"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={1}>High to Low</MenuItem>
          <MenuItem value={2}>Low to High</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}
