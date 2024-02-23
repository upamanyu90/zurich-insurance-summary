/*
This component is wrapped in a HOC with protected routes, any unauthorized access will get redirected to login screen automatically
*/

"use client"

import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'
import noAccess from '../../component/noAccess'

function Dashboard() {
    const {emailId, name, sessionActive} = useSelector(state => state.loginReducer)

const logOut = () => {
    signOut('google')
}

const getDashboardContent = () => {
    if(sessionActive) {
        return (<>
        <Header emailId={emailId} name={name} logOut={logOut} />
        <Content />
        <Footer disclosureMessage={'This is a configurable disclosure message'} />
    </>)
    }
}

return <div>{getDashboardContent()}</div>
}

export default noAccess(Dashboard)