import React from 'react'
// Import components
import Slider from '../components/slider'
// Style module
import experimentsStyles from '../style/modules/experiments.module.scss'

const Experiments = () => {
    return (
        <section className={experimentsStyles.experiments} >
            <p className="sectionTitle">Concepts & Experiments</p>
            <Slider />
        </section>
    )
}

export default Experiments