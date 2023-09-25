import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const exerciseApi = axios.create({
    baseURL: 'https://exercisedb.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_EXERCISES_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
});

const fetchFromApi = async (url) => {
    const response = await exerciseApi.get(url);
    return response.data;
};

export const fetchExercises = createAsyncThunk('exercise/fetchExercises', () => fetchFromApi(`/exercises`));
export const fetchBodyParts = createAsyncThunk('exercise/fetchBodyParts', () => fetchFromApi(`/exercises/bodyPartList`));
export const fetchByBodyParts = createAsyncThunk('exercise/fetchByBodyParts', (chosenPart) => fetchFromApi(`/exercises/bodyPart/${chosenPart}`));
export const fetchById = createAsyncThunk('exercise/fetchById', (id) => fetchFromApi(`/exercises/exercise/${id}`));
export const fetchTargetMuscle = createAsyncThunk('exercise/fetchTargetMuscle', (target) => fetchFromApi(`/exercises/target/${target}`));
export const fetchEquipment = createAsyncThunk('exercise/fetchEquipment', (equipment) => fetchFromApi(`/exercises/equipment/${equipment}`));

const initialState = {
    exercises: [],
    bodyParts: [],
    exerciseDetail: [],
    chosenPart: "all",
    searchValue: '',
    target: [],
    equipment: [],
    loading: false,
};

const loadingReducers = {
    [fetchExercises.pending]: (state) => { state.loading = true; },
    [fetchBodyParts.pending]: (state) => { state.loading = true; },
    [fetchByBodyParts.pending]: (state) => { state.loading = true; },
    [fetchById.pending]: (state) => { state.loading = true; },
    [fetchTargetMuscle.pending]: (state) => { state.loading = true; },
    [fetchEquipment.pending]: (state) => { state.loading = true; },
};

const fulfilledReducers = {
    [fetchExercises.fulfilled]: (state, { payload }) => { state.exercises = payload; state.loading = false; },
    [fetchBodyParts.fulfilled]: (state, { payload }) => { state.bodyParts = ["all", ...payload]; state.loading = false; },
    [fetchByBodyParts.fulfilled]: (state, { payload }) => { state.exercises = payload; state.loading = false; },
    [fetchById.fulfilled]: (state, { payload }) => { state.exerciseDetail = payload; state.loading = false; },
    [fetchTargetMuscle.fulfilled]: (state, { payload }) => { state.target = payload; state.loading = false; },
    [fetchEquipment.fulfilled]: (state, { payload }) => { state.equipment = payload; state.loading = false; },
};
const rejectedReducers = {
    [fetchExercises.rejected]: (state) => {
      state.loading = false;
    },
    [fetchBodyParts.rejected]: (state) => {
      state.loading = false;
    },
    [fetchByBodyParts.rejected]: (state) => {
      state.loading = false;
    },
    [fetchById.rejected]: (state) => {
      state.loading = false;
    },
    [fetchTargetMuscle.rejected]: (state) => {
      state.loading = false;
    },
    [fetchEquipment.rejected]: (state) => {
      state.loading = false;
    },
  };
  




const exercise = createSlice({
    name: "exercise",
    initialState,
    reducers: {
        setSearchValue: (state, { payload }) => { state.searchValue = payload; },
        setChosenPart: (state, { payload }) => { state.chosenPart = payload; },
        setExercises: (state, { payload }) => {
            state.exercises = payload;
        },
    },
    extraReducers: {
        ...loadingReducers,
        ...fulfilledReducers,
        ...rejectedReducers, 
    },
});

export const { setSearchValue, setChosenPart, setExercises } = exercise.actions;

export const getExercises = (state) => state.exercise.exercises;
export const getBodyParts = (state) => state.exercise.bodyParts;
export const getChosenPart = (state) => state.exercise.chosenPart;
export const getExerciseDetail = (state) => state.exercise.exerciseDetail;
export const getTargetMuscle = (state) => state.exercise.target;
export const getEquipment = (state) => state.exercise.equipment;
export const getLoading =  (state) => state.exercise.loading
export default exercise.reducer;
