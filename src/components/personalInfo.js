import React from 'react'
// Import components
import SkillsList from './skillsList'
import ExperiencesList from './experiencesList'
// Style module
import personalInfoStyle from '../style/modules/personalinfo.module.scss'

const PersonalInfo = () => {

    return (
        <section className={personalInfoStyle.personalInfo}>
            <SkillsList />
            <ExperiencesList />
        </section>
    )
}

export default PersonalInfo