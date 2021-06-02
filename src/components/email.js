import React from 'react'
import emailStyle from '../style/modules/email.module.scss'

const Email = () => {

    return (
        <div className={emailStyle.email}>
            <h3 className="sectionTitle">e-mail</h3>
            <span>
                <a href="mailto:project@davideallevi.it">project@davideallevi.it</a>
            </span>
        </div>
    )
}

export default Email