import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const bmiApi = axios.create({
    baseURL: 'https://bmi-calculator6.p.rapidapi.com',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_BMI_API_KEY,
        'X-RapidAPI-Host': 'bmi-calculator6.p.rapidapi.com'
    }
});

export const fetchBMI = createAsyncThunk(
    'bmi/fetchBMI',
    async ({height, weight}) => {
        const url = `/bmi?height=${height}&weight=${weight}&system=metric`;
        const response = await bmiApi.get(url);
        return response.data;
    }
);

const initialState = {
    bmi: {}
}

const bmiSlice = createSlice({
    name: "bmi",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBMI.fulfilled]: (state, { payload }) => {
            state.bmi = payload
        },
    }
})


export const  getBmi = (state) => state.bmi.bmi

export default bmiSlice.reducer
