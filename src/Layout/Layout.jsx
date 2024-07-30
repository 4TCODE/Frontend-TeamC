import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/Footer/Footer'

export default function Layout() {
    return (
        <div className='p-5'>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </div>
    )
}
