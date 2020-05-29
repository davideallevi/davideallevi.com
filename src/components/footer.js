import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from "gatsby"
// Import components
import Location from './location'
// Style module
import footerStyles from '../style/modules/footer.module.scss'

const Footer = () => {

    const metaData = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                author
            }
        }
    }
    `)

    return (
        <footer className={footerStyles.footer} >
            <Location />
            <div className={footerStyles.siteInfo}>
                {metaData.site.siteMetadata.author}©2020
            </div>
        </footer>
    )
}

export default Footer