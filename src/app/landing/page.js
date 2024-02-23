"use client"
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { setSessionStatus, setName, setEmail, setLoggingOutStatus } from '../../store/login/loginAction';
import '../../styles/Login.modules.css';

const Landing = () => {
    const session = useSession()
    const dispatch = useDispatch()
    const {sessionActive} = useSelector(state => state.loginReducer)

    const router = useRouter()

    useEffect(() => {
      if(session?.status === 'authenticated') {
        dispatch(setSessionStatus(true))
        dispatch(setName(session.data.user.name))
        dispatch(setEmail(session.data.user.email))
        dispatch(setLoggingOutStatus(true))
      } else {
        dispatch(setSessionStatus(false))
        dispatch(setLoggingOutStatus(false))
        router.push('/')
      }

    }, [session?.status])

    const login = async () => {
      signIn('google')
    }

    useEffect(() => {
        if(sessionActive) {
            router.push('/dashboard')
        }
    }, [sessionActive])


    return (
      <div className='container'>
        <h1 className='heading'>Welcome to Zurich Insurance Customer Portal</h1>
        <div className='form'>
          <button className='button' onClick={() => login()}>Login with Google</button>
        </div>
      </div>
    )
}

export default Landing;