import React from "react"
// Import components
import Layout from '../components/layout'
//import PersonalInfo from "../components/personalInfo"
import SkillsList from '../components/skillsList'
import ExperiencesList from '../components/experiencesList'
import Slider from '../components/slider'
// Style module
import aboutStyle from '../style/modules/about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <section className={aboutStyle.about}>
                <p className={aboutStyle.aboutImportant}>
                    I collaborate with inspirational companies to <a href="https://www.behance.net/allevidavi2623" target="blank_">build their brands</a> and create valuable digital strategies and experiences.
                </p>
                <p>
                    I like to explore and experiment the latest design tools and development technologies to always improve my work process, designing and coding modern and useful <a href="https://dribbble.com/davideallevi" target="blank_">interactions and visual effects</a>.
                </p>
            </section>
            <Slider />
            <SkillsList />
            <ExperiencesList />
        </Layout>
    )
}

export default AboutPage