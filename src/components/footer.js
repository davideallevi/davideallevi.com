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
            <p className={footerStyles.author}>{metaData.site.siteMetadata.author}©2020</p>
        </footer>
    )
}

export default Footer