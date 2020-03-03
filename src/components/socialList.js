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
            <p className="sectionTitle">Connect with me</p>
            <ul>
                {socialData.allSocialJson.edges.map((edge) => {
                    return (
                        <li>
                            <a href={edge.node.link}>{edge.node.social}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialList