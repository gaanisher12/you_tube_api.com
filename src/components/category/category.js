import React from 'react';
import Stack from "@mui/material/Stack";
import {categories, colors} from "../constants/constant";

const Category = ({selectCategory, selectHandler}) => {
    return (
        <Stack direction='row' style={{overflowX: 'scroll'}}>
            {categories.map(item =>
                <button type='button' className='category-btn' key={item.name} onClick={() => selectHandler(item.name)}
                        style={{
                            backgroundColor: selectCategory === item.name ? colors.bgColor : 'white',
                            color: selectCategory === item.name ? 'white' : colors.bgColor
                        }}
                >
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                </button>
            )}
        </Stack>
    );
}

export default Category;