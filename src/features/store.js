import {configureStore} from "@reduxjs/toolkit"
import exerciseReducer from "./slices/exerciseSlice"
import videosReducer from "./slices/videoSlice"

const store = configureStore({
    reducer: {
        exercise: exerciseReducer,
        videos  : videosReducer ,
    }
})

export default store;
