import React from 'react'
// Style module
import locationStyle from '../style/modules/location.module.scss'

const Location = () => {
    return (
        <div className={locationStyle.location} >
            Currently based in <span className={locationStyle.locationItem} >Milan</span>
        </div>
    )
}

export default Location