import React, { useEffect, useState } from 'react'
import { ProtectApi } from '../API/ApiCall'

export default function Protected() {

  const [Data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)

const  ProtectedRoute=()=>
{
  ProtectApi().then(({data})=>
  {
    setData(data.message)
    console.log(data);
    setIsLoading(false)
  })
}
useEffect(()=>
{
  ProtectedRoute()
},[])

  return (
    <div>
{isLoading?<span  className='text-white'>Checking ProtectedRoute...</span>: <p  className='text-white' >{Data}</p>}

    </div>
  )
}
