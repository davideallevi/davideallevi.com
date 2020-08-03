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
                        specifics
                    }
                }
            }
        }
    `)

    return (
        <section className={skillsStyle.skills}>
            <h3 className="sectionTitle">What I do best:</h3>
            <ul>
                {skillsData.allSkillsJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.id}>
                            <h4 className={skillsStyle.singleSkill}>{edge.node.skill}</h4><br />
                            <span className={skillsStyle.singleSkillSpecifics}>{edge.node.specifics}</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SkillsList