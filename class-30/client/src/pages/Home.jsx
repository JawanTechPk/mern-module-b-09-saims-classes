import React from 'react'
import { Navbar_Component } from '../components/Navbar_Component'
import { User_Profile_Section } from '../components/User_Profile_Section'
import { IoEyeOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";



const Home = () => {
    return (
        <div className='bg-bg_color h-[100dvh]'>

            <Navbar_Component />


            <div className='px-3'>


                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>

                    <div className='rounded-md overflow-hidden mt-3 bg-white max-w-full h-full'>
                        <div className='space-y-2 py-3'>
                            <div  className='px-3 flex items-center justify-between'>
                                <div>
                                    <h2 className='font-bold text-lg text-primary_color'>
                                        John Doe
                                    </h2>
                                    <h5 className='text-gray-500 text-sm'>
                                        user001
                                    </h5>

                                </div>

                                <button>
                                <BsThreeDots size={25} color='gray'  />
                                </button>



                            </div>
                            <img className='h-[200px] w-full object-cover' src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg' />

                            <div className='px-3 space-y-2'>
                                <h1 className='font-medium text-xl'>
                                    Post Title
                                </h1>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe voluptatem ratione nemo, autem a, itaque nisi, ducimus atque numquam provident necessitatibus sapiente architecto qui incidunt excepturi cupiditate. Exercitationem, dicta!</p>

                                <div className='flex items-center justify-between'>
                                    <p className='text-sm text-gray-400' >1d ago</p>


                                    <div className='flex items-center space-x-1'>
                                        <IoEyeOutline color='gray' />
                                        <p className='text-sm text-gray-400' >1k views</p>

                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>


                </div>
            </div>



        </div>
    )
}

export { Home }
