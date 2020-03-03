import React from 'react'
// Data import from GraphQL
import { graphql, useStaticQuery } from 'gatsby'
// Style module
import skillsStyle from '../style/modules/skills.module.scss'

const SkillsList = () => {
    const skillsData = useStaticQuery(graphql`
        query {
            allSkillsJson {
                edges {
                    node {
                        skill
                    }
                }
            }
        }
    `)

    return (
        <section className={skillsStyle.skills}>
            <p className="sectionTitle">What I do best:</p>
            <ul>
                {skillsData.allSkillsJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.path}>
                            <p className={skillsStyle.singleSkill}>{edge.node.skill}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SkillsList