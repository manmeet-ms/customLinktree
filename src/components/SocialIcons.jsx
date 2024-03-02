import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';


const SocialIcons = props => {
    return (
        <a href={props.url}>
            <div className={`flex flex-col text-slate-300 hover:text-${props.hoverColor}-500 items-center`}>
                <span className={` text-slate-200 bg-${props.hoverColor}-800 bg-opacity-0 hover:bg-opacity-30 hover:text-${props.hoverColor}-300 px-5 py-2 rounded-full`} >
                    {props.icon}
                </span>
                <span className='mt-1 text-xs font-bold'>{props.name}</span>
            </div>
        </a>
    )
}

SocialIcons.defaultProps = {
    icon: <AccessAlarm />,
    name: "icon",
}

export default SocialIcons