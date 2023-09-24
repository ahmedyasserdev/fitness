import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const videosApi = axios.create({
    baseURL: 'https://youtube-search-and-download.p.rapidapi.com',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_VIDEOS_API_KEY,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
});

export const fetchRelatedVideosByName = createAsyncThunk(
    'videos/fetchRelatedVideosByName',
    async (name) => {
        const url = `/search?query=${name}`;
        const response = await videosApi.get(url);
        return response.data;
    }
);


 const initialState = {
    videos :  []
}


const videos = createSlice({
    name: "videos",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRelatedVideosByName.fulfilled]: (state, { payload }) => {
            state.exerciseVidoes = payload.contents
        },
    }
})


export const getVideos = (state) => state.videos.exerciseVidoes

export default videos.reducer

