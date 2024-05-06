import React from 'react'

const DoctorCard = ({ img ,name,Specialization,email,regYear}) => {
  return (
      <div className='w-52 h-auto rounded-xl bg-slate-300 gap-4 space-y-2 items-center text-center flex flex-col justify-between hover:border-10 hover:border-gray-900 hover:bg-slate-400 hover:text-white cursor-pointer'>
            {img  && <img className='rounded-xl' src={img} alt="Course Logo" />} 
            <div className='font-bold'>{name}</div>
            <div>{Specialization}</div>
            <div className='flex flex-row space-x-1 mb-2'>
                <div className='relative text-center items-center bg-green-600 text-white mb-1 rounded-md pl-2 pr-2'>{email}</div>
                <div className='relative text-center items-center bg-yellow-600 text-white mb-1 rounded-md pl-2 pr-2'>{regYear}</div>
            </div>
            
        </div>
  )
}

export default DoctorCard