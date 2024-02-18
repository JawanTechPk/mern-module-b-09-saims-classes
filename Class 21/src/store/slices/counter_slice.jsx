import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    value:0

}

const counter_slice = createSlice({
    name:'counter',
    initialState:initial_state,
    // reducers:{

    // }

})


export default counter_slice.reducer