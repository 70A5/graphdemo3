import React from 'react'

export default function Skeleton({number = 1}) {
  return (
    Array(number).fill(0).map((el, index) => (
        <div key={index}>
          <div className='flex flex-row  border-r-4 w-[20rem] items-center gap-2 p-2 rounded'>
                <span className='w-11/12 bg-gray-300 h-2 rounded-full animate-pulse'></span>
          </div>
      </div>
      ))
  )
}