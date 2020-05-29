import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from 'gatsby'
import socialListStyle from '../style/modules/social.module.scss'

const SocialList = () => {

    const socialData = useStaticQuery(graphql`
        query {
            allSocialJson {
                edges {
                    node {
                        social
                        link
                    }
                }
            }
        }
    `)

    return (
        <div className={socialListStyle.social}>
            <h3 className="sectionTitle">social</h3>
            <ul>
                {socialData.allSocialJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}>
                            <a href={edge.node.link} target="blank_">{edge.node.social}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialList