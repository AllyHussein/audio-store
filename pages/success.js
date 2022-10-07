import React, { useEffect, useState } from 'react'
import {useStateContext } from '../context/StateContext'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'
import { runFireWorks } from '../lib/utils'
function Success() {
    const {setCartItems , setTotalPrice , setTotalQuantities} = useStateContext()
    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireWorks()
    } , [])
  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank You For Your Purchase!!</h2>
            <p className='email-msg'>Check Your Email For The Recipt</p>
            <p className='description'>
                If You Have Any Questions , Please Send Us An Email
                <a className='email' href='mailto:audiostore@gmail.com'>audiostore@gmail.com</a>
            </p>
            <Link href='/'>
                <button type='button' className='btn' width='300px'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success