import React from 'react';
import {Stack, Box} from "@mui/material";
import {colors, logo} from '../constants/constant'
import SearchBar from "../search-bar/search-bar";
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <Stack direction="row"
               alignItem="center"
               alignContent="center"
               justifyContent="space-between"
               p={2}
               sx={{position: 'sticky', top: 0, zIndex: 1, backgroundColor: colors}}
        >
            <Link to={'/'}>
                <img src={logo} alt="logo" height={35}/>
            </Link>
            <SearchBar/>
            <Box/>

        </Stack>
    );
}

export default Navbar;