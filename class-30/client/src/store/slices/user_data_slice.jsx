import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn:false,
    user_data:null,
}


const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    reducers:{
        set_user_auth_and_data:(state, actions)=>{
            state.isLoggedIn = actions.payload.isLoggedIn
            state.user_data = actions.payload.data
        }
    }

})


export  const {set_user_auth_and_data} = user_data_slice.actions
export default user_data_slice.reducer