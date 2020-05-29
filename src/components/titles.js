import React from "react"
// Data import from GraphQL
import { graphql, useStaticQuery } from "gatsby"
// Style module
import titleStyle from '../style/modules/titles.module.scss'
//import Typed from 'typed.js';

const Titles = () => {

    const metaData = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
                description
            }
        }
    }
    `)

    return (
        <div className={titleStyle.titles}>
            <h1>{metaData.site.siteMetadata.title}</h1>
            <h2>{metaData.site.siteMetadata.description}</h2>
        </div>
    )
}

export default Titles