import React from 'react'
import Navbar from '../../../components/globals/Navbar'
import { NavLink } from 'react-router-dom'

export default function DetailPermohonan() {
  return (
    <div className='bg-white h-screen w-screen '>
      <Navbar/>

      <div className="m-10 mb-[70px] flex flex-col items-center justify-center text-black bg-slate-50 border rounded-lg p-10">
        <div className="">
          <p className='font-semibold text-lg mb-10'>Permohonan Anda Diterima</p>
          <p className='mb-2'>Nama Pemohon : Fauziah Nur Syifa</p>
          <p className='mb-2'>Nama Acara : Seminar Sistem Informasi</p>
          <p className='mb-2'>Tanggal Acara : 12/12/2024</p>
          <p className='mb-2'>Lokasi : Bogor Creative Center</p>

        </div>
          <p className='text-sm mt-10'>Jika peminjaman ruangan telah selesai dilakukan, silahkan klik tombol di bawah ini</p>
          <NavLink to="/uploadLaporan">
            <div className="btn mt-4 w-30 bg-green-400 text-black">Selesai</div>
          </NavLink>
      </div>
    </div>
  )
}
