import React from 'react'

export default function Radio({label, nama, value}) {
  return (
    <>
    <div className="form-control">
        <label className="label cursor-pointer flex justify-start ">
            <span className="label-text text-black">{label}</span>
            <input 
                type="radio" 
                name="radio-10"
                value={value}
                className="radio checked:bg-[#6AB6FD] ml-4" 
                 />
        </label>
    </div>
    </>
  )
}
