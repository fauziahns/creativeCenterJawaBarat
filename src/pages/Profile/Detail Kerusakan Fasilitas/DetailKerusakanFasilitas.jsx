import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DetailKerusakanFasilitas() {
  return (
    <div className="bg-white h-screen">
        <div className="artboard artboard-horizontal phone-1 mx-auto items-center flex justify-center">
            <div className="rounded-lg border p-10 text-black mt-10">
                <p className='text-lg'>Denda Kerusakan Fasilitas</p>
                <p>Silahkan membayar denda ke nomor rekening berikut</p>
                <p className='font-bold pb-5'>2941904812 (BCA)</p>
                
                <div className="w-full max-w-xs mt-4 text-black ">
                    <p className='text-sm mb-2'>Unggah Bukti Pembayaran</p>
                    <input 
                        type="file" 
                        className="file-input file-input-bordered file-input-md  w-full max-w-xs bg-white" 
                        name='buktiPembayaran'/>
                </div>
                <NavLink to='/Profile'>
                    <div className="btn mt-4 bg-green-500 hover:bg-white text-black">Submit</div>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
