import React from 'react'
import FileInput from '../../../components/globals/FileInput'
import { NavLink } from 'react-router-dom'
import Navbar from '../../../components/globals/Navbar'
import TextInput from '../../../components/globals/TextInput'
import TextArea from '../../../components/globals/TextArea'
import Radio from '../../../components/globals/Radio'

export default function EditPermohonan() {
  return (
    <div>
      <Navbar/>
      <div className="flex bg-white">
        <div className="flex flex-col bg-[#fcfcfc] w-[40%] m-7 rounded-lg border">
            <TextInput
            label={"Nama Lengkap"}
            placeholder={"Nama Lengkap Pemohon"}
            id={"namaPemohon"}
            nama={"namaPemohon"}
            value={""}
            type={"text"}/>

            <TextArea
                label={"Alamat Pemohon"}
                placeholder={"Alamat"}
                id={"alamatPemohon"}
                nama={"alamatPemohon"}
                type={"text"}
                value={""}/>

            <TextInput
            label={"Kecamatan"}
            placeholder={"Kecamatan"}
            id={"kecamatanPemohon"}
            nama={"kecamatanPemohon"}
            type={"text"}
            value={""}/>

            <TextInput
            label={"Kelurahan"}
            placeholder={"Kelurahan"}
            id={"kelurahanPemohon"}
            nama={"kelurahanPemohon"}
            type={"text"}
            value={""}/>

            <TextInput
            label={"Kabupaten/Kota"}
            placeholder={"Kabupaten/Kota"}
            id={"kabPemohon"}
            nama={"kabPemohon"}
            type={"text"}
            value={""}/>

            <label className=" grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
                <div className="label">
                    <span className="label-text text-black">Lokasi Gedung</span>
                </div>
                <select className="select select-bordered w-56 bg-white placeholder:text-sm text-black">
                    <option disabled selected>Pilih</option>
                    <option value="Pelajar/Mahasiswa">Pelajar/Mahasiswa</option>
                    <option value="Guru/Dosen">Guru/Dosen</option>
                    <option value="Wirausahawan">Wirausahawan</option>
                    <option value="PNS/ASN">PNS/ASN</option>
                    <option value="Pegawai Swasta">Pegawai Swasta</option>
                    <option value="Freelancer">Freelancer</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </label>

            <TextInput
            label={"No Telepon"}
            placeholder={"No Telepon"}
            id={"noPemohon"}
            nama={"noPemohon"}
            type={"number"}
            value={""}/>

            <TextInput
            label={"Email"}
            placeholder={"Email"}
            id={"emailPemohon"}
            nama={"emailPemohon"}
            type={"text"}
            value={""}/>

            <TextInput
            label={"NIK"}
            placeholder={"NIK"}
            id={"nikPemohon"}
            nama={"nikPemohon"}
            type={"number"}
            value={""}/>

            <div className="w-full max-w-xs ml-[85px] mt-4 text-black ">
              <p className='text-sm mb-2'>Unggah KTP</p>
              <input type="file" className="file-input file-input-bordered file-input-md  w-full max-w-xs bg-white" />
            </div>

            

        </div>

        <div className="flex flex-col bg-[#fcfcfc] w-[40%] m-7 rounded-lg border justify-center">
        <TextInput
              label={"Nama Intansi/Pribadi"}
              placeholder={"Nama Intansi/Pribadi"}
              id={"namaIntansi"}
              nama={"namaIntansi"}
              type={"text"}
              value={""}/>

            <TextArea
                label={"Alamat Intansi"}
                placeholder={"Alamat Intansi"}
                id={"alamatIntansi"}
                nama={"alamatIntansi"}
                type={"text"}
                value={""}/>

            <TextInput
              label={"No Telepon "}
              placeholder={"No Telepon Intansi"}
              id={"noTelpIntansi"}
              nama={"noTelpIntansi"}
              type={"number"}
              value={""}/>

            <TextInput
              label={"Alamat Email"}
              placeholder={"Email Intansi"}
              id={"emailIntansi"}
              nama={"emailIntansi"}
              type={"text"}
              value={""}/>

            <TextInput
              label={"Status dalam Intansi/Pribadi"}
              placeholder={"Status dalam Intansi/Pribadi"}
              id={"statusIntansi"}
              nama={"statusIntansi"}
              type={"text"}
              value={""}/>

                        {/* lokasi gedung */}
            <label className=" grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
                <div className="label">
                    <span className="label-text text-black">Lokasi Gedung</span>
                </div>
                <select className="select select-bordered w-56 bg-white placeholder:text-sm text-black">
                    <option disabled selected>Pilih</option>
                    <option value="Bogor Creative Center">[BCC] Bogor Creative Center</option>
                    <option value="Purwakarta Creative Center">[PCC] Purwakarta Creative Center</option>
                    <option value="Ruang Kreatif Ahmad Djuhara">[AD] Ruang Kreatif Ahmad Djuhara</option>
                </select>
            </label>

            {/* ruangan */}
              <label className=" grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
                  <div className="label">
                      <span className="label-text text-black">Ruangan</span>
                  </div>
                  <select className="select select-bordered w-56 bg-white placeholder:text-sm text-black">
                      <option disabled selected>Pilih</option>
                      <option value="BCC - Cafe Outdoor">BCC - Cafe Outdoor</option>
                      <option value="BCC - Cafe Indoor">BCC - Cafe Indoor</option>
                      <option value="BCC - Ruang Galeri">BCC - Ruang Galeri</option>
                      <option value="BCC - Ruang Fotografi">BCC - Ruang Fotografi</option>
                      <option value="BCC - Ruang Musi">BCC - Ruang Musik</option>
                      <option value="BCC - Auditorium">BCC - Auditorium</option>
                      <option value="PCC - Ruang Flexsible" className='bg-slate-200'>PCC - Ruang Flexsible</option>
                      <option value="PCC - Workshop" className='bg-slate-200'>PCC - Workshop</option>
                      <option value="PCC - Ruang Kelas" className='bg-slate-200'>PCC - Ruang Kelas</option>
                      <option value="PCC - Ruang Audio" className='bg-slate-200'>PCC - Ruang Audio</option>
                      <option value="PCC - Auditorium" className='bg-slate-200'>PCC - Auditorium</option>
                      <option value="AD - Gor">AD - Gor</option>
                      <option value="AD - Workshop">AD - Workshop</option>
                      <option value="AD - Plaza Terbuka">AD - Plaza Terbuka</option>
                      <option value="AD - Co-working">AD - Co-working</option>
                      <option value="AD - Kantin">AD - Kantin</option>
                      <option value="AD - Auditorium">AD - Auditorium</option>
                  </select>
              </label>

              {/* subsektor kegiatan */}
              <label className=" grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
                  <div className="label">
                      <span className="label-text text-black">Subsektor Kegiatan</span>
                  </div>
                  <select className="select select-bordered w-56 bg-white placeholder:text-sm text-black">
                      <option disabled selected>Pilih</option>
                      <option value="Aplikasi">Aplikasi</option>
                      <option value="Arsitektur">Arsitektur</option>
                      <option value="Desain Interior">Desain Interior</option>
                      <option value="Desain Produk">Desain Produk</option>
                      <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                      <option value="Film, Animasi dan Video">Film, Animasi dan Video</option>
                      <option value="Fashion">Fashion</option>
                      <option value="Fotografi">Fotografi</option>
                      <option value="Kuliner">Kuliner</option>
                      <option value="Musik">Musik</option>
                      <option value="Penerbitan">Penerbitan</option>
                      <option value="Pengambangan Permainan">Pengambangan Permainan</option>
                      <option value="Periklanan">Periklanan</option>
                      <option value="Seni Kriya">Seni Kriya</option>
                      <option value="Seni Pertunjukan">Seni Pertunjukan</option>
                      <option value="Seni Rupa">Seni Rupa</option>
                      <option value="TV dan Radio">TV dan Radio</option>
                  </select>
              </label>
            
            {/* jenis kegiatan */}
            <label className=" grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
                <div className="label">
                    <span className="label-text text-black">Jenis Kegiatan</span>
                </div>
                <select className="select select-bordered w-56 bg-white placeholder:text-sm text-black">
                    <option disabled selected>Pilih</option>
                    <option value="Rapat">Rapat</option>
                    <option value="Talkshow/Seminar">Talkshow/Seminar</option>
                    <option value="Pameran">Pameran</option>
                    <option value="Event">Event</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </label>

            <TextInput
            label={"Nama Kegiatan"}
            placeholder={"Nama Kegiatan"}
            id={"namaKegiatan"}
            nama={"namaKegiatan"}
            value={""}/>

            {/* tanggal mulai */}
            <label className="grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
              <div className="label">
                  <span className="label-text text-black">Tanggal Mulai</span>
                </div>
                <input 
                  type="date" 
                  id='tanggalMulaiKegiatan'
                  name='tanggalMulaiKegiatan'
                  className="input input-bordered w-56 bg-white placeholder:text-sm" />
            </label>

            {/* tanggal selesai */}
            <label className="grid grid-cols-2 form-control w-full max-w-xs ml-20 mt-4">
              <div className="label">
                  <span className="label-text text-black">Tanggal Berakhir</span>
                </div>
                <input 
                  type="date" 
                  id='tanggalAkhirKegiatan'
                  name='tanggalAkhirKegiatan'
                  className="input input-bordered w-56 bg-white placeholder:text-sm" />
            </label>

            {/* jam mulai */}
            <div className="flex w-full max-w-xs ml-[85px] mt-4 text-black ">
              <p className='w-40 text-sm'>Jam Mulai</p>
              <div className="flex">
                <div className="">
                  <Radio
                    label={"08.00"}
                    nama={"08.00"}
                    value={"08.00"}/>
                  <Radio
                    label={"09.00"}
                    nama={"09.00"}
                    value={"09.00"}/>
                  <Radio
                    label={"10.00"}/>
                  <Radio
                    label={"11.00"}/>
                </div>
                <div className="ml-4">
                  <Radio
                    label={"12.00"}/>
                  <Radio
                    label={"13.00"}/>
                  <Radio
                    label={"14.00"}/>
                  <Radio
                    label={"15.00"}/>
                </div>
              </div>
            </div>

            {/* jam berakhir */}
            <div className="flex w-full max-w-xs ml-[85px] mt-4 text-black ">
              <p className='w-40 text-sm'>Jam Berakhir</p>
              <div className="flex">
                <div className="">
                  <Radio
                    label={"09.00"}/>
                  <Radio
                    label={"10.00"}/>
                  <Radio
                    label={"11.00"}/>
                  <Radio
                    label={"12.00"}/>
                  <Radio
                    label={"13.00"}/>
                </div>
                <div className="ml-4">
                  <Radio
                    label={"14.00"}/>
                  <Radio
                    label={"15.00"}/>
                  <Radio
                    label={"16.00"}/>
                  <Radio
                    label={"17.00"}/>
                </div>
              </div>
            </div>
            
            <TextInput
            label={"Jumlah Peserta"}
            placeholder={"Jumlah Peserta"}
            id={"jumlahPeserta"}
            nama={"jumlahPeserta"}
            value={""}/>

            <div className="w-full max-w-xs ml-[85px] mt-4 text-black ">
              <p className='text-sm mb-2'>Unggah Surat Permohonan</p>
              <input type="file" className="file-input file-input-bordered file-input-md  w-full max-w-xs bg-white" />
            </div>

            <div className="grid place-content-end px-14 my-5">
              <NavLink to="/Profile">
                <div className="btn w-20 bg-[#1A8C44] border-white text-white">Simpan</div>
              </NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}
