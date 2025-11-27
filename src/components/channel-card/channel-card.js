import React from 'react';
import {Box, CardContent, CardMedia, Typography} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";
import {Link} from "react-router-dom"


function ChannelCard({channel, marginTop, marginAuto}) {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '10px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '356px', md: '310px'},
                height: '326px',
                background: 'linear-gradient(198deg, rgba(152, 3, 142, 1) 5%, rgba(53, 41, 201, 1) 76%)',
                margin: marginAuto,
                marginTop: marginTop
            }}
        >
            <Link to={`/channel/${channel?.snippet?.channelId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white'
                    }}
                >

                    <CardMedia
                        image={channel?.snippet?.thumbnails?.high?.url}
                        alt={channel?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                        }}
                    />
                    <Typography variant={'h6'}>
                        {channel?.snippet?.title}{' '}
                        <CheckCircle sx={{fontSize: '14px', color: 'white', ml: '5px'}}/>
                    </Typography>
                    {channel?.statistics?.subscriberCount && (
                        <Typography sx={{fontSize: '15px', fontWeight: 'bold', color: 'white'}}>
                            {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-Us')} Subscribers
                        </Typography>
                    )}

                </CardContent>
            </Link>
        </Box>
    );

}

export default ChannelCard;