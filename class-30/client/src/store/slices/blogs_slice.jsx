import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn:false
}


const blogs_slice = createSlice({
    name:'blogs',
    initialState:initial_state,
    // reducers:{

    // }

})


export default blogs_slice.reducer