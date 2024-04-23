import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

const Navbar_Component = () => {
    const {isLoggedIn} = useSelector((store)=>store.user_data)
    return (
        <div className='bg-primary_color h-20 px-3 flex items-center justify-between'>


            <div className='text-3xl text-white font-bold'>
                Logo
            </div>


            {isLoggedIn ?  <div className='space-x-3 text-white font-medium'>
                Username
            </div> : 
            
            
            <div className='space-x-3 text-white font-medium'>
                <Link to='/login'>
                    Login</Link><span>
                    |</span><Link to='/signup'>
                    Signup</Link>
            </div>
            }
        </div>
    )
}

export { Navbar_Component }
