import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const exerciseApi = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY ,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
});

export const fetchExercises = createAsyncThunk(
    'exercise/fetchExercises',
    async () => {
        const url = `/exercises`;
        const response = await exerciseApi.get(url);
        return response.data;
    }
);

export const fetchBodyParts = createAsyncThunk(
    'exercise/fetchBodyParts',
    async () => {
        const url = `/exercises/bodyPartList`;
        const response = await exerciseApi.get(url);
        return response.data;
    }
);
export const fetchByBodyParts = createAsyncThunk(
    'exercise/fetchByBodyParts',
    async (chosenPart) => {
        const url = `/exercises/bodyPart/${chosenPart}`;
        const response = await exerciseApi.get(url);
        return response.data;
    }
);



const initialState = {
    exercises: [],
    bodyParts: [],
    chosenPart: "all",
    searchValue: '',
    loading: false,
};

const exercise = createSlice({
    name: "exercise",
    initialState,
    reducers: {
        setSearchValue: (state, { payload }) => {
            state.searchValue = payload;
        },
        setExercises: (state, { payload }) => {
            state.exercises = payload;
        },
        setChosenPart : (state, { payload }) => {
            state.chosenPart = payload
        },
    },
    extraReducers: {
        [fetchExercises.pending]: (state) => {
            state.loading = true;
        },
        [fetchExercises.fulfilled]: (state, { payload }) => {
            state.exercises = payload;
            state.loading = false;
        },
        [fetchBodyParts.pending]: (state) => {
            state.loading = true;
        },
        [fetchBodyParts.fulfilled]: (state, { payload }) => {
            state.bodyParts = [  "all", ...payload ];
            state.loading = false;
        },

           [fetchByBodyParts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.exercises = payload
        },
    },
});

export const { setSearchValue, setExercises , setChosenPart} = exercise.actions;

export const getExercises = (state) => state.exercise.exercises;
export const getBodyParts = (state) => state.exercise.bodyParts;
export const getChosenPart = (state) => state.exercise.chosenPart;


export default exercise.reducer;