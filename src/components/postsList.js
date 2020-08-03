import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from 'gatsby'

// Import components
//import Img from 'gatsby-image' //Import Img component from Gatsby
//<Img fluid={edge.node.frontmatter.image.childImageSharp.fluid}/>

// Style module
import postListStyle from '../style/modules/projects.module.scss'

const PostsList = () => {

    const postsData = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {order: DESC, fields: [frontmatter___date]}
            ) {
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
        <section
            className={postListStyle.projects}>
            <h3 className="sectionTitle">Latest works:</h3>
            <ul>
                {postsData.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}
                            className={postListStyle.singleItem}>
                            <h4>{edge.node.frontmatter.title}<span className={postListStyle.projectDate}>{edge.node.frontmatter.date}</span></h4>
                            <span className={postListStyle.projectCategory}>{edge.node.frontmatter.category}</span>
                            <a href={edge.node.frontmatter.link} target="_blank" rel="noopener noreferrer" className={postListStyle.projectLink} ><div></div></a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default PostsList