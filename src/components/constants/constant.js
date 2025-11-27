import {
    Checkroom, DeveloperMode, FaceRetouchingNatural,
    FitnessCenter,
    GraphicEq,
    Home,
    LiveTv, MusicNote,
    OndemandVideo,
    School,
    SportsEsports,
    TheaterComedy
} from "@mui/icons-material";
import React from "react";

export const logo = 'https://www.freeiconspng.com/uploads/movie-icon-2.png';

export const colors = {
    bgColor: '#FD1D1D',
    background: 'linear-gradient(198deg, rgba(152, 3, 142, 1) 5%, rgba(53, 41, 201, 1) 76%)'
}

export const color = {
    fontColor: 'linear-gradient(198deg, rgba(152, 3, 142, 1) 5%, rgba(53, 41, 201, 1) 76%)'
}

export const color2 = {
    fontColor2: 'rgba(253, 29, 29, 1)'
}
export const categories = [
    {name: 'New', icon: <Home/>},
    {name: 'Movie', icon: <OndemandVideo/>},
    {name: 'Live', icon: <LiveTv/>},
    {name: 'Gaming', icon: <SportsEsports/>},
    {name: 'Education', icon: <School/>},
    {name: 'Sport', icon: <FitnessCenter/>},
    {name: 'Comedy', icon: <TheaterComedy/>},
    {name: 'Podcast', icon: <GraphicEq/>},
    {name: 'Fashion', icon: <Checkroom/>},
    {name: 'Crypto', icon: <DeveloperMode/>},
    {name: 'Gym', icon: <FitnessCenter/>},
    {name: 'Beauty', icon: <FaceRetouchingNatural/>},
    {name: 'Music', icon: <MusicNote/>},

]