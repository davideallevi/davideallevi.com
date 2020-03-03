import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from 'gatsby'
// Style module
import experienceStyle from '../style/modules/experiences.module.scss'

const ExperiencesList = () => {
    const ExperiencesData = useStaticQuery(graphql`
        query {
            allExperiencesJson {
                edges {
                    node {
                        role
                        from
                        to
                        at
                        where
                    }
                }
            }
        }
    `)

    return (
        <section className={experienceStyle.experiences}>
            <p className="sectionTitle" >Work experience:</p>
            <ul>
                {ExperiencesData.allExperiencesJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.path} >
                            <p className={experienceStyle.singleExperience}>{edge.node.role}</p>
                            <p className={experienceStyle.singleExperiencePlace}>{edge.node.at} - {edge.node.where}</p>
                            <p className={experienceStyle.singleExperienceDates}>{edge.node.from} / {edge.node.to}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ExperiencesList