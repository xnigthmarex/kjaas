'use client';

import React from 'react'
import test from '@/app/dashboard/[...token]/Check.jsx'
import Check from '@/check.jsx'
function dashboard({params}) {
  //function checking if there is a session auth token present in browser 

    

  return (
    <>
    <h1>{verification().name}</h1>
    <h1>{params.token}</h1>
    </>
  )
}

export default dashboard


