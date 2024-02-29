import React from 'react'
import PropTypes from 'prop-types'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const SocialIcons = props => {
    return (
        <div className={`flex flex-col text-gray-300 hover:text-${props.hoverColor}-500 items-center`}>
            <span className={` text-gray-200 bg-${props.hoverColor}-800 bg-opacity-0 hover:bg-opacity-30 hover:text-${props.hoverColor}-300 px-5 py-2 rounded-full`} >
                 {props.icon}
                </span>
            <span className='mt-1.5 text-xs font-bold'>{props.name}</span>

        </div>
    )
}

SocialIcons.defaultProps = {
    icon: <AccessAlarm/>,
    name: "icon",
}

export default SocialIcons