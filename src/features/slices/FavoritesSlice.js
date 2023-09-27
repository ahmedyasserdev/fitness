import { createSlice } from "@reduxjs/toolkit";

const savedFavs = localStorage.getItem("favs");
const initialState = {
  favs: savedFavs ? JSON.parse(savedFavs) : [],
};

const favorites = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavs: (state, { payload }) => {
      const isFav = !state.favs.some(exercise => exercise.id === payload.id)
      if (isFav) {
        state.favs.push(payload);
        localStorage.setItem("favs", JSON.stringify(state.favs));
      }
    },
    
    deleteFromFavs: (state, { payload }) => {
      state.favs.splice(payload, 1);
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },

    clearFavs: (state) => {
      state.favs = [];
      localStorage.setItem("favs", JSON.stringify(state.favs));
    },
  },
});

export const { addToFavs, deleteFromFavs, clearFavs } = favorites.actions;
export const getFavs = (state) => state.favorites.favs
export default favorites.reducer;
