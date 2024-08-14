import React from "react";
import TextInputNonLabel from "../../components/globals/TextInputNonLabel";
import Swal from "sweetalert2";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import assets from "../../assets/assets";

export default function BuatAkun() {
  const [inputValue, setInputValue] = React.useState({
    nama: "",
    nomer_telepon: "",
    email: "",
    password: "",
    konfirmPassword: "",
  });
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (inputValue.password !== inputValue.konfirmPassword) {
        return Swal.fire({
          title: "Password dan konfirmasi password tidak sama",
          icon: "error",
        });
      }

      if (Object.keys(inputValue).some((key) => inputValue[key] === "")) {
        return Swal.fire({
          title: "Harap isi semua field",
          icon: "error",
        });
      }

      const token = Math.ceil(Math.random() * 99999);

      const { error } = await supabase
        .from("users")
        .insert({
          nama: inputValue.nama,
          nomer_telepon: inputValue.nomer_telepon,
          email: inputValue.email,
          no_ktp: inputValue.no_ktp,
          password: inputValue.password,
          verification_code: token,
        })
        .select();

      if (error) {
        throw error;
      }

      if (!error) {
        const res = await emailjs.send(
          "service_4xfv1p4",
          "template_impxbxf",
          {
            name: inputValue.nama,
            email: inputValue.email,
            message: token,
            recipent: inputValue.email,
          },
          "FEE3F8SRKq4MKTM0i"
        );

        console.log(res);
      }

      Swal.fire({
        title: "Berhasil Membuat Akun!",
        icon: "success",
      });

      navigate("/login");
    } catch (error) {
      if (error.code === "23505") {
        return Swal.fire({
          title: "Email sudah terdaftar!",
          icon: "error",
        });
      }

      Swal.fire({
        title: "Gagal Sign Up",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen  grid justify-items-center place-content-center bg-white">
      <div className=" ">
        <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-sm h-100 border border-gray-200 items-center">
          <div className="">
            <img
              src={assets.buatAkun}
              alt=""
              className="w-96 ml-4 rounded-lg"
            />
          </div>

          <div className="p-10 bg-white flex flex-col text-black font-semibold text-3xl">
            <p className="text-center">Buat Akun</p>
            <div className="flex flex-col mt-5">
              <TextInputNonLabel
                id={"namaPenggunaBaru"}
                placeholder={"Nama"}
                nama={"namaPenggunaBaru"}
                value={inputValue.nama}
                onChange={(e) =>
                  setInputValue({ ...inputValue, nama: e.target.value })
                }
              />
              <TextInputNonLabel
                id={"noPenggunaBaru"}
                placeholder={"Nomor Telepon"}
                nama={"noPenggunaBaru"}
                value={inputValue.nomer_telepon}
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    nomer_telepon: e.target.value,
                  })
                }
              />
              <TextInputNonLabel
                id={"emailPenggunaBaru"}
                placeholder={"Email"}
                nama={"emailPenggunaBaru"}
                value={inputValue.email}
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    email: e.target.value,
                  })
                }
              />

            <div>
              <input 
                type="password" 
                placeholder="Password"
                id="passwordPenggunaBaru"
                value={inputValue.password}
                name="passwordPenggunaBaru"
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    password: e.target.value,
                  })
                }
                className="input input-bordered w-full max-w-xs bg-white text-black placeholder:text-sm mb-4" />
            </div>

            <div>
              <input 
                type="password" 
                placeholder="Password"
                id="konfirmPassPenggunaBaru"
                value={inputValue.konfirmPassword}
                name="konfirmPassPenggunaBaru"
                onChange={(e) =>
                  setInputValue({
                    ...inputValue,
                    konfirmPassword: e.target.value,
                  })
                }
                className="input input-bordered w-full max-w-xs bg-white text-black placeholder:text-sm mb-4" />
            </div>

              <button
                disabled={loading}
                onClick={handleSubmit}
                className="btn mt-5 border border-white text-white disabled:text-white"
              >
                {loading ? "Loading..." : "Buat Akun"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
