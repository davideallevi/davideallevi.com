import React from 'react'
// Import components
import Header from './header'
import Contacts from './contacts'
import Footer from './footer'

const Layout = (props) => {
    return (
        <main>
            <Header />
            {props.children}
            <Contacts />
            <Footer />
        </main>
    )
}

export default Layout