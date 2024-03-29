import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import TabItem from './Tabitem';
import Image from 'next/image';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role='tabpanel'
            hidden={value != index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {
                value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>

                    </Box>
                )
            }

        </div>
    );
}


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}


function allyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Tabmaster() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            <Box className="max-w-[1400px] mx-auto mt-16">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
                        <Tab label="Philadelphia" {...allyProps(0)} />
                        <Tab label="Ottawa" {...allyProps(1)} />
                        <Tab label="New York" {...allyProps(2)} />
                        <Tab label="Dubai" {...allyProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}
                    className=" flex"
                >
                    <>
                        <img
                            layout='fill'
                            objectFit='contain'
                            objectPosition='left'
                            className='relative max-w-[500px] rounded-lg'
                            src={"/img/philly.jpg"}
                        />

                        <>
                            <p>Entry</p>
                        </>
                    </>

                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    Item Four
                </CustomTabPanel>
            </Box>
        </div>
    )
}

export default Tabmaster
