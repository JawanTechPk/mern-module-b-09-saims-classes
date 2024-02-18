import { createSlice } from "@reduxjs/toolkit";


const initial_state ={
    theme_mode:'light'
}
const theme_slice = createSlice({
    name:'theme',
    initialState:initial_state,
    reducers:{
        convert_to_dark:(state)=>{
            state.theme_mode = 'dark'
        },
        convert_to_light:(state, actions)=>{
            console.log(actions)
            state.theme_mode = 'light'
        },
        theme_toggle_dynamic:(state)=>{
            if(state.theme_mode === 'dark'){
                state.theme_mode = 'light'
            }
            else{
                state.theme_mode = 'dark'
            }

        },
        theme_toggle_using_payload:(state, actions)=>{
            console.log('actions', actions)

            state.theme_mode = actions.payload
        }

    }

})

export const {convert_to_dark, convert_to_light, theme_toggle_dynamic, theme_toggle_using_payload} = theme_slice.actions


export default theme_slice.reducer