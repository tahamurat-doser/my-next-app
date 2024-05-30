
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-40 h-screen bg-orange-300 float-left text-black pt-10 ' >
        <nav className='flex flex-col' >
            <Link href="/dashboard/projects" className='m-5'  >Projects</Link>
            <Link href="/dashboard/team" className='m-5'  >Team</Link>
            <Link href="/dashboard/users" className='m-5'  >Users</Link>
        </nav>
    </div>
  )
}

export default Sidebar