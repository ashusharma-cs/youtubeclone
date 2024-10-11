import React from 'react'
// import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import "../sidebarrow.css"

function SidebarRow({Icon, title, selected}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>

            <Icon className="sidebarRow__icon"></Icon>
            <h2 className='sidebarRow__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
