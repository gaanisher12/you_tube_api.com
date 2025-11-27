import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {color} from "../constants/constant";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [value, setValue] = useState('');
    //useNavigate
    const navigate = useNavigate();

    const searchHandler = e => {
        e.preventDefault();
        if (value) {
            navigate(`search/${value}`);
            setValue('');
        }
    }

    const getValue = e => {
        setValue(e.target.value)
    }

    return (
        <Paper component={'form'}
               sx={{
                   border: `1px solid ${color.fontColor}`,
                   pl: 2,
                   boxShadow: 'none',
                   direction: 'row',
                   alignContent: 'center'
               }}
               onSubmit={searchHandler}
        >
            <input type="text" placeholder='Search' onChange={getValue} className='search-bar'/>
            <IconButton>
                <SearchIcon/>
            </IconButton>

        </Paper>
    );
}

export default SearchBar;