import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from 'gatsby'
// Import components
import Img from 'gatsby-image' //Import Img component from Gatsby
// Style module
import postListStyle from '../style/modules/projects.module.scss'

const PostsList = () => {
    const postsData = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            category
                            date
                            link
                            image {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 800,
                                    ) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            imageAlt
                        }
                    }
                }
            }
        }
    `)

    return (
        <section className={postListStyle.projects}>
            <p className="sectionTitle">Latest works:</p>
            <ul>
                {postsData.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={postListStyle.singleItem}>
                            <h3>{edge.node.frontmatter.title}</h3>
                            <span>{edge.node.frontmatter.category}</span>
                            <a href={edge.node.frontmatter.link} target="_blank" rel="noopener noreferrer" className={postListStyle.projectLink} ><div></div></a>
                            <Img fluid={edge.node.frontmatter.image.childImageSharp.fluid} alt={edge.node.frontmatter.imageAlt} className={postListStyle.projectImage} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PostsList