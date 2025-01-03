import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";


const movieSlice= createSlice({
    name: "movie",
    initialState: [],
    reducers: {
      addMovie(state,action){
        state.push(action.payload)
      },
      removeMovie(state,action){
        const index= state.indexOf(action.payload);
        state.splice(index,1);
      },
      // reset(state,action) {// We cannot directly mutate the state as state=[] as it will not be detected by immer so we will return [], immer will assume that since we have not made any change to the state so the value returned will be the new state.
      // return [];
      // }
    },
    extraReducers(builder){
      builder.addCase(reset,(state,action)=>{
        return [];
      })
    }
  })

export const {addMovie,removeMovie} = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;