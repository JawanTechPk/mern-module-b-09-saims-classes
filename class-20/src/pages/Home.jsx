import React from 'react'
import { Navbar_Component } from '../components/Navbar_Component'
import { User_Profile_Section } from '../components/User_Profile_Section'



const Home = () => {
    return (
        <div className='bg-bg_color h-[100dvh]'>

            <Navbar_Component />


            <div className='px-3'>


                <div >
                    <User_Profile_Section />

                    
                </div>
            </div>



        </div>
    )
}

export { Home }
