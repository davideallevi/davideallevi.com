import React from 'react'
// Import components
import { Link } from 'gatsby' // Import Link component from Gatsby
// Style module
import headerStyles from '../style/modules/header.module.scss'

const Header = () => {
    return (
        <header>
            <nav>
                <Link className={headerStyles.navLinkHome} activeClassName={headerStyles.activeNavLink} to="/">projects</Link>
                <Link className={headerStyles.navLinkAbout} activeClassName={headerStyles.activeNavLink} to ="/about">about</Link>
            </nav>
        </header>
    )
}

export default Header