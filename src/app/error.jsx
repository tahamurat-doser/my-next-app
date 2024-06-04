'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='mt-64 text-center'>
      <h2 className='text-3xl text-red-800'>Something went wrong!</h2>
   
       
     
    </div>
  )
}