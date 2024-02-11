import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn:false
}


const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    // reducers:{

    // }

})


export default user_data_slice.reducer