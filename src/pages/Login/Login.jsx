import React from 'react'
import TextInput from '../../components/globals/TextInput'
import { NavLink, useLocation } from 'react-router-dom'
import { useFormik } from 'formik'

export default function Login() {
    const {state} = useLocation()
    const formik = useFormik({
        initialValues: {
            username: state?.username || "",
            password: state?.password || ""
        }
    })
  return (
    <div className='h-screen  grid justify-items-center place-content-center bg-white'>
        <div className=" ">
            <div className="grid grid-cols-2 gap-8  bg-white rounded-lg shadow-sm h-100 border border-gray-200 items-center">

                <div className="p-10 bg-[#fdf8f8] flex flex-col text-black font-semibold text-3xl">
                    <p>Sign In to <br/> Creative Center Jawa Barat</p>
                        <div className="flex flex-col mt-10">
                            <label className="input input-bordered flex items-center gap-2 mb-2 bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input 
                                    type="text" 
                                    className="grow" 
                                    value={formik.values.username}
                                    placeholder="Username" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2 bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input 
                                    type="password" 
                                    className="grow" 
                                    value={formik.values.password}/>
                            </label>
                            <a href="" className='btn mt-10 border border-white text-white'>Sign In</a>
                        </div>
                        <div className="divider"></div> 
                        <p className='text-[12px] text-center font-light'>Belum punya akun?<NavLink to="/BuatAkun"><a href="" className='font-bold hover:underline'> Buat akun</a></NavLink></p>
                </div>

                <div className="">
                    <img src="src\assets\login.png" alt="" className='w-96'/>
                </div>
            </div>
        </div>

    </div>
  )
}
