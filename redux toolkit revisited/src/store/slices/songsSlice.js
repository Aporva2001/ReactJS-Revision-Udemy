import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songSlice = createSlice({
    // "name-property" + "/" + "reducers name"
    name: "song",
    initialState: [], // this is the value of the iniital state (song)
    reducers: {
      addSong(state, action) {
        // state here refers to the part of the big state which is referred by createSlice
        state.push(action.payload);
      },
      removeSong(state, action) {
        const index= state.indexOf(action.payload);
  
        state.splice(index,1);
      },
    },
    extraReducers(builder){
      builder.addCase(reset, (state,action)=>{
        return [];
      })
    }
    // extraReducers(builder){ // This is the function which will run automatically whenver an action is dispatched and it also 
    //   // contains a builder argument which tells about the extra function to be run.
    //   // builder.addCase('movie/reset',(state,action)=>{
    //   builder.addCase(movieSlice.actions.reset.toString(),(state,action)=>{
    //     return [];
    //   })
  
    // }
  });

  export const {addSong, removeSong} = songSlice.actions;
  export const songsReducer= songSlice.reducer;