import React from 'react'

const Input = ({type,id,name, placeholder, register, validationSchema, errors}) => {
  return (
    <div className="relative w-full">
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="peer w-full px-3 py-1 bg-white/90 border border-neutral-600 rounded-md 
           text-black text-sm placeholder-neutral-400 focus:outline-none  "
           {...register(name, validationSchema)}
          />
          <label
            htmlFor={id}
            className="absolute left-2 text-sm text-yellow-600 transition-all scale-100 -translate-y-0 
           opacity-0 peer-focus:opacity-100 peer-focus:translate-y-[-20px] peer-focus:scale-90"
          >
            {placeholder}
            <span className="text-red-500">*</span>
          </label>
          <p className="text-red-500 text-[10px]">
            {errors[name] ? 
            <>
{errors[name]?.message} 
            </>
            : <span className='opacity-0'>
                message
                </span>}
            </p>
        </div>
  )
}

export default Input