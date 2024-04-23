import axios_instance from "../src/config/axios"
import { set_user_auth_and_data } from "../src/store/slices/user_data_slice"


const login_action = (post_data, dispatch) => {
    axios_instance.post(
        '/login',
         post_data,
        {withCredentials:true}
        ).then((res)=>{

            dispatch(set_user_auth_and_data({
                isLoggedIn: res.data.success,
                data:null
            }))

        console.log('res', res.data)

    }).catch((err)=>{
        console.log('error', err)
    })
}



export {login_action}