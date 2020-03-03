import React from 'react'
// Style module
import locationStyle from '../style/modules/location.module.scss'

const Location = () => {
    return (
        <div className={locationStyle.location} >
            <span>Currently based in </span><p className={locationStyle.locationItem} >Milan</p>
        </div>
    )
}

export default Location