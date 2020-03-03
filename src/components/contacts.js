import React from 'react'
// Import components
import SocialList from './socialList'
import Email from './email'
// Style module
import contactsStyles from '../style/modules/contacts.module.scss'

const Contacts = () => {

    return (
        <section className={contactsStyles.contacts}>
            <p className={contactsStyles.sectionDescription}>I’m <span>currently available</span> for short and long term collaborations all around the globe, also remotly. <br />Need a hand? <span>Feel free to text me.</span></p>
            <div className={contactsStyles.contactsList}>
                <Email />
                <SocialList />
            </div>
        </section>
    )
}

export default Contacts