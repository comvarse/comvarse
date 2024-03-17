import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabmaster from './Tabmaster';


function Tabzone(props) {
    const { children, value, index, ...other } = props;
    return (
        <>
            <div className=' bg-gray-100 pb-32'>

                {children}
            </div>

        </>
    )
}

export default Tabzone
