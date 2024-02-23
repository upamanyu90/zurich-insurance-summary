'use Client'
import React from 'react'
import { redirect, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function noAccess(Component) {
    const access = true

  return function NoAccess(props) {
    const {sessionActive} = useSelector(state => state.loginReducer)
    useEffect(() => {
      if(!sessionActive) {
        redirect('/landing')
      }
    }, [])

    if(!access) {
        return null
    }
    return <Component {...props} />
  }
}