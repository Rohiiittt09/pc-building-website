"use client"
import { LogOut } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'


const page = () => {
    const{data:session,staus}=useSession()
    if(session){
        return(
            <div className='bg-black text-white text-3xl'>
                <div>welcome{ session.user.name}</div>

                <button onClick={() => signOut()}>logout</button>
            </div>
            
        )
    }
  return (
    <div>
        not login
    </div>
  )
}

export default page
