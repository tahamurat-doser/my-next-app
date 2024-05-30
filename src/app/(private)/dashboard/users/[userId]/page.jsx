
import GoBack from '@/components/GoBack'
import React from 'react'

const UserDetail = ({params}) => {
  const {userId} = params
  return (
    <div>
        <h1 className='text-2xl text-center'>User Detail</h1>
        <p>user - {userId}</p>
        <div className='m-5' >
          <GoBack />
        </div>
    </div>
  )
}

export default UserDetail

export async function generateStaticParams(){
  const useArr = [1,2,3,4]
  return useArr.map(userId => ({userId: userId.toString()}))
}