import React from 'react'
import TextInput from '../../components/globals/TextInput'
import TextArea from '../../components/globals/TextArea'
import { NavLink } from 'react-router-dom'

export default function UploadLaporan() {
  return (
    <div className="bg-white h-screen w-screen">
    <div className='pt-10 mb-[70px] flex flex-col items-center justify-center '>
        <div className="flex flex-col bg-[#fcfcfc] w-[40%] rounded-lg border justify-center py-10">
            <TextInput
            label={"Nama Lengkap"}
            placeholder={"Nama Lengkap Pemohon"}
            id={"namaPemohon"}
            nama={"namaPemohon"}
            value={""}
            type={"text"}/>

            <TextArea
                label={"Rangkuman Acara"}
                placeholder={"Rangkuman Singkat Acara"}
                id={"rangkumanAcara"}
                nama={"rangkumanAcara"}
                type={"text"}
                value={""}/>

            <TextInput
            label={"Nama Acara"}
            placeholder={"Nama Acara"}
            id={"namaKegiatan"}
            nama={"namaKegiatan"}
            type={"text"}
            value={""}/>

            <TextInput
            label={"Jumlah Peserta"}
            placeholder={"Jumlah Peserta"}
            id={"jumlahPeserta"}
            nama={"jumlahPeserta"}
            type={"text"}
            value={""}/>

            <div className="flex justify-center mt-10">
                <NavLink to="/Profile">
                    <div className="btn w-24 bg-green-400 text-black hover:bg-white">Upload</div>
                </NavLink>
            </div> 
        </div>
    </div>
    </div>
  )
}
