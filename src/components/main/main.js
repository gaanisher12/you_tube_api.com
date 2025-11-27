import React, {useEffect, useState} from 'react';
import Category from "../category/category";
import {color2} from "../constants/constant";
import {Container, Typography, Box, Stack} from "@mui/material";
import {ApiServise} from "../apiService/api-service";
import Videos from "../videos/videos";


const Main = () => {
    const [selectCategory, setSelectCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    const selectHandler = (category) => setSelectCategory(category);


    useEffect(() => {
        ApiServise.fetching(`search?part=snippet&q=${selectCategory}`).then(data => setVideos(data.items))
    }, [selectCategory])

    return (
        <Stack>
            <Category selectCategory={selectCategory} selectHandler={selectHandler}/>
            <Box p={2} sx={{height: '90vh'}}>
                <Container maxWidth={'90%'}>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
                        {selectCategory} <span style={{color: color2.fontColor2}}> videos</span>
                    </Typography>
                </Container>
                <Videos videos={videos}/>

            </Box>
        </Stack>
    );
}

export default Main;