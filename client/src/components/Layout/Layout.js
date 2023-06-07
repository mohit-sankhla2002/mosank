import React from 'react'
import {Outlet} from 'react-router-dom' // helps in importing of different sections in on page to create a desdired layout
import Header from './Header'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>);
  
}

export default Layout;