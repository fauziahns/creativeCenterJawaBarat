import React from 'react'
import TextInputNonLabel from '../../components/globals/TextInputNonLabel'

export default function BuatAkun() {
  return (
    <div className='h-screen  grid justify-items-center place-content-center bg-white'>
        <div className=" ">
            <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-sm h-100 border border-gray-200 items-center">

                <div className="">
                    <img src="src\assets\buatAkun.png" alt="" className='w-96 ml-4 rounded-lg'/>
                </div>

                <div className="p-10 bg-white flex flex-col text-black font-semibold text-3xl">
                    <p className='text-center'>Buat Akun</p>
                        <div className="flex flex-col mt-5">
                            <TextInputNonLabel
                                id={"namaPenggunaBaru"}
                                placeholder={"Nama"}
                                nama={"namaPenggunaBaru"}
                                value={""}/>
                            <TextInputNonLabel
                                id={"noPenggunaBaru"}
                                placeholder={"Nomor Telepon"}
                                nama={"noPenggunaBaru"}
                                value={""}/>
                            <TextInputNonLabel
                                id={"emailPenggunaBaru"}
                                placeholder={"Email"}
                                nama={"emailPenggunaBaru"}
                                value={""}/>
                            <TextInputNonLabel
                                id={"noKtpPenggunaBaru"}
                                placeholder={"No KTP"}
                                nama={"noKtpPenggunaBaru"}
                                value={""}/>
                            <TextInputNonLabel
                                id={"passwordPenggunaBaru"}
                                placeholder={"Password"}
                                nama={"passwordPenggunaBaru"}
                                value={""}/>
                            <TextInputNonLabel
                                id={"konfirmPassPenggunaBaru"}
                                placeholder={"Konfirmasi Password"}
                                nama={"konfirmPassPenggunaBaru"}
                                value={""}/>
                            <a href="" className='btn mt-5 border border-white text-white'>Sign In</a>
                        </div>
                </div>

            </div>
        </div>

    </div>
  )
}
