import React from "react"
// Import components
import Layout from '../components/layout'
import PersonalInfo from "../components/personalInfo"
import AboutImage from "../images/about/davideallevi-digital-designer-freelancer-portrait-ui-designer-ux-designer-frontend-developer.jpg"
// Style module
import aboutStyle from '../style/modules/about.module.scss'

const AboutPage = () => {
    return (
        <Layout>
            <section className={aboutStyle.about}>
                <h1 className={aboutStyle.title}>My name is Davide Allevi, a digital designer actually based in Milan.</h1>
                <p className={aboutStyle.description}>
                    I moved my first professional steps 5+ years ago as a graphic designer, driven by the passion for brand design, typography and motion graphics.
                    I gradually went into digital, especially after the amazing experience with the Italian National Research Council as head of design for Sirene, a software for emergency response on the territory of Italy.
                    Nowadays I collaborate with inspirational companies and brands to create valuable and intuitive digital strategies and experiences.
                    I like to explore the latest design tools and development technologies to always improve my design process and experiment with modern and useful interactions and visual effects.
                </p>
            </section>
            <div className={aboutStyle.aboutImageContainer} >
                <img src={AboutImage} className={aboutStyle.aboutImage} alt="davide allevi, digital designer, freelancer, ui designer, ux designer, frontend developer, web designer, graphic designer, italian designer, designer milan" />
            </div>
            <PersonalInfo />
        </Layout>
    )
}

export default AboutPage