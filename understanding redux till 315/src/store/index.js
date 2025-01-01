import { configureStore, createSlice } from "@reduxjs/toolkit";

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
});

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
    }
  }
})
const store = configureStore({
  reducer: {
    songs: songSlice.reducer, // reducer is a function which wraps all the functions inside reducers in createSlice
    movies: movieSlice.reducer
  },
});

// console.log(store);
// const startingState = store.getState();
// // console.log(startingState);

// // store.dispatch({
// //   type: "song/addSong",
// //   payload: "New Song !",
// // });

// //INSTEAD OF ABOVE CODE WE CAN ALSO WRITE

// store.dispatch(songSlice.actions.addSong("Some song")); // These are the action creators, they contain functions which when called, the actions are immediately dispatched.

// const newState = store.getState();
// console.log(JSON.stringify(newState));

// // console.log(songSlice.actions.addSong("Some song")); // These are the action creators, they contain functions which when called, the actions are immediately dispatched.
// // // Some song is a payload.

export { store };

export const {addSong, removeSong} = songSlice.actions;
export const  {addMovie, removeMovie} = movieSlice.actions;
