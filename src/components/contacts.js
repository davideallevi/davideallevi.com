import React from 'react'
// Import components
import SocialList from './socialList'
import Email from './email'
// Style module
import contactsStyles from '../style/modules/contacts.module.scss'

import profileImage from "../images/about/min.jpg"

const Contacts = () => {

    return (
        <section data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={contactsStyles.contacts}>
            <p className={contactsStyles.sectionDescription}>
                <span className={contactsStyles.state}>Currently available</span> for short and long term collaborations all around the globe, also remotly. Need a hand? <span>Feel free to contact me.</span>
            </p>
            <div className={contactsStyles.contactsList}>
                <Email />
                <SocialList />
            </div>
            <div className={contactsStyles.profileImageContainer}>
                <img src={profileImage} className={contactsStyles.profileImage} alt="davide allevi, digital designer, freelancer, ui designer, ux designer, frontend developer, web designer, graphic designer, italian designer, designer milan" />
            </div>
        </section>
    )
}

export default Contacts