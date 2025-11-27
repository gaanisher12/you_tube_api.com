import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import React, {useEffect, useState} from "react";
import ChannelCard from "../channel-card/channel-card";
import {ApiServise} from "../apiService/api-service";
import Container from "@mui/material/Container";
import Videos from "../videos/videos";

const Channel = () => {
    const [channelDetail, setChannelDetail] = useState()
    console.log(channelDetail)
    const [videos, setVideos] = useState([])
    console.log(videos)

    const {id} = useParams()

    useEffect(() => {
        ApiServise.fetching(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data.items[0]))

        ApiServise.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(dataVideo => setVideos(dataVideo?.items))
    }, [id])

    return (
        <Box minHeight={'95vh'} mt={'1vh'}>
            <Box>
                <Box
                    width={'100%'}
                    height={'200px'}
                    zIndex={10}
                    sx={{
                        backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        objectFit: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <ChannelCard channel={channelDetail} marginTop={'-100px'} marginAuto={'0 auto'}/>
            </Box>


            <Container maxWidth={'90%'} sx={{marginTop: '30px'}}>
                {<Videos videos={videos}/>}
            </Container>
        </Box>
    )
}


export default Channel;