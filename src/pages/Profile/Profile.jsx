import React from 'react'
import Navbar from '../../components/globals/Navbar'
import { NavLink } from 'react-router-dom'

export default function Profile() {
  return (
    <div className='bg-white '>
      <Navbar/>
      <p className='text-black px-10 pt-10 pb-5 font-semibold text-lg'>Data Permohonan</p>
        <div className="overflow-x-auto bg-white mx-10 p-5 rounded-lg text-black border ">
        <table className="table">
            {/* head */}
            <thead>
            <tr className='text-black text-center'>
                <th>No Permohonan</th>
                <th>Pemohon</th>
                <th>Nama Acara</th>
                <th>Tanggal Mulai</th>
                <th>Lokasi Gedung</th>
                <th>Status</th>
                <th>Aksi</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className='text-center'>
                    <td>0001</td>
                    <td>Fauziah Nur Syifa</td>
                    <td>Seminar Sistem Informasi</td>
                    <td>12/12/2024</td>
                    <td>Bogor Creative Center</td>
                    <td className='font-bold'>
                        <p className='p-2 rounded-lg text-center bg-gray-200'>Draft</p>
                    </td>
                    <th className='flex justify-center'>
                        <div className="tooltip cursor-pointer" data-tip="Edit">
                            <NavLink to="/editPermohonan">
                                <img src="src\assets\editing.png" alt="" className='w-[21px] h-[21px] mr-2'/>
                            </NavLink>
                        </div>
                        <div className="tooltip cursor-pointer" data-tip="Kirim">
                            <img src="src\assets\checked.png" alt="" />
                        </div>
                        <div className="tooltip cursor-pointer mt-1" data-tip="Batalkan">
                            <img src="src\assets\close.png" alt="" className='w-[19px] h-[19px] ml-2' />
                        </div>
                        
                    </th>
                </tr>

                {/* row 2 */}
                <tr className='text-center'>
                    <td>0001</td>
                    <td>Fauziah Nur Syifa</td>
                    <td>Seminar Sistem Informasi</td>
                    <td>12/12/2024</td>
                    <td>Bogor Creative Center</td>
                    <td className='font-bold'>
                        <p className='p-2 rounded-lg text-center bg-gray-200'>Terkirim</p>
                    </td>
                    <th className='flex'>
                        <NavLink to="/detailPermohonan">
                            <p className='cursor-pointer font-normal bg-white p-2 rounded-lg'>details</p>
                        </NavLink>
                    </th>
                </tr>

                {/* row 3 */}
                <tr className='text-center'>
                    <td>0001</td>
                    <td>Fauziah Nur Syifa</td>
                    <td>Seminar Sistem Informasi</td>
                    <td>12/12/2024</td>
                    <td>Bogor Creative Center</td>
                    <td className='font-bold'>
                        <p className='p-2 rounded-lg text-center bg-red-200'>Ditolak</p>
                    </td>
                    <th className='flex'>
                         <NavLink to="/detailPermohonann">
                            <p className='cursor-pointer font-normal bg-white p-2 rounded-lg'>details</p>
                        </NavLink>
                    </th>
                </tr>

                {/* row 4 */}
                <tr className='text-center'>
                    <td>0001</td>
                    <td>Fauziah Nur Syifa</td>
                    <td>Seminar Sistem Informasi</td>
                    <td>12/12/2024</td>
                    <td>Bogor Creative Center</td>
                    <td className='font-bold'>
                        <p className='p-2 rounded-lg text-center bg-green-200'>Diterima</p>
                    </td>
                    <th className='flex'>
                        <NavLink to="/detailPermohonan">
                            <p className='cursor-pointer font-normal bg-white p-2 rounded-lg'>details</p>
                        </NavLink>
                    </th>
                </tr>
                {/* row 2 */}
                <tr className='text-center'>
                    <td>0001</td>
                    <td>Fauziah Nur Syifa</td>
                    <td>Seminar Sistem Informasi</td>
                    <td>12/12/2024</td>
                    <td>Bogor Creative Center</td>
                    <td className='font-bold'>
                        <p className='p-2 rounded-lg text-center bg-green-300'>Selesai</p>
                    </td>
                    <th className='flex'>

                    </th>
                </tr>
            </tbody>
        </table>
        </div>

        <div className="overflow-x-auto bg-white mx-10 p-5 rounded-lg text-black border mt-20">
        <p className='text-black pb-5 font-semibold text-lg'>Data Denda Kerusakan Fasilitas</p>
        <table className="table w-[100%]">
              {/* head */}
              <thead className='bg-slate-200 rounded-lg'>
              <tr className='text-black text-center'>
                  <th>No Laporan</th>
                  <th>Pemohon</th>
                  <th>Lokasi Gedung</th>
                  <th>Ruangan</th>
                  <th>Tanggal</th>
                  <th>Denda</th>
                  <th>Bukti Kerusakan</th>
                  <th>Status</th>
              </tr>
              </thead>
              <tbody>
                  {/* row 1 */}
                  <tr className='text-center'>
                      <td>0001</td>
                      <td>Fauziah Nur Syifa</td>
                      <td>Bogor Creative Center</td>
                      <td>Cafe Indoor</td>
                      <td>12/12/2024</td>
                      <td>300.000</td>
                      <td className="underline">Lihat Bukti</td>
                      <NavLink to='/detailKerusakanFasilitas'>
                        <td>
                            <p className='p-2 font-semibold text-sm bg-red-300 rounded-lg'>Belum Bayar</p>
                        </td>
                      </NavLink>
                  </tr>
              </tbody>
          </table>
        </div>
    </div>
  )
}
