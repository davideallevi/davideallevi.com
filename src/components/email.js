import React from 'react'
import emailStyle from '../style/modules/email.module.scss'

const Email = () => {

    return (
        <div className={emailStyle.email}>
            <p className="sectionTitle">Send me an E-mail</p>
            <a href="mailto:allevi.daviel2@gmail.com">allevi.daviel2@gmail.com</a>
        </div>
    )
}

export default Email