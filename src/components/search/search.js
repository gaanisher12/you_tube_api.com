import React, {useEffect, useState} from 'react';
import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useParams} from "react-router-dom";
import {colors} from "../constants/constant";
import {ApiServise} from "../apiService/api-service";
import Videos from "../videos/videos";

function Search() {
    const [videos, setVideos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${id}`).then(data => setVideos(data.items))
    }, [id])
    return (
        <Box p={2} mt={'50px'} sx={{height: '120vh'}}>
            <Container maxWidth={'90%'}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>
                    Search for results <span style={{color: colors.bgColor}}>{id}</span> videos
                </Typography>
                <Videos videos={videos}/>
            </Container>

        </Box>
    );
}

export default Search;