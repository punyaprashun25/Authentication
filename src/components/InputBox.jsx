import React from 'react'

const InputBox = ({type, name, id, HandleChange, value}) => {
    return (
        <div className="input-box w-full flex justify-between flex-col">
            <label className='text-lg capitalize' htmlFor={id}>{name}</label>
            <input type={type} name={name} id={id} className=' py-1 w-full bg-transparent border-b-2 border-solid border-b-teal-500 outline-none' value={value} onChange={()=>HandleChange(event)}/>
        </div>
    )
}

export default InputBox
