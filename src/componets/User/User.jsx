import React from 'react'
import {  useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center bg-red-600 text-white p-2 text-2xl'>
      User: {userid}
    </div>
  )
}

export default User
