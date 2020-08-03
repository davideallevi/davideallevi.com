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
            <h3 className="sectionTitle" >Work experience:</h3>
            <ul className={experienceStyle.list}>
                {ExperiencesData.allExperiencesJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}>
                            <h4 className={experienceStyle.singleExperience}>{edge.node.role}</h4>
                            <div className={experienceStyle.singleExperiencePlace}>
                                <span>{edge.node.at}</span> - <span className={experienceStyle.singleExperienceCity}>{edge.node.where}</span>
                            </div>
                            <span className={experienceStyle.singleExperienceDates}>{edge.node.from} / {edge.node.to}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default ExperiencesList