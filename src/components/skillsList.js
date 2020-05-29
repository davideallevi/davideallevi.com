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
        <section className={skillsStyle.skills}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset="100"
            >
            <h3 className="sectionTitle">What I do best:</h3>
            <ul>
                {skillsData.allSkillsJson.edges.map((edge) => {
                    return (
                        <li key={edge.node.path}
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                            >
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