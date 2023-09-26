import {configureStore} from "@reduxjs/toolkit"
import exerciseReducer from "./slices/exerciseSlice"
import videosReducer from "./slices/videoSlice"
import bmiReducer from "./slices/bmiSlice"

const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
        videos  : videosReducer ,
        bmi : bmiReducer ,
    }
})

export default store;
