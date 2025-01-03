import { configureStore} from "@reduxjs/toolkit";
import { reset } from "./actions";
import { moviesReducer,addMovie,removeMovie } from "./slices/moviesSlice";
import { songsReducer,addSong,removeSong } from "./slices/songsSlice";



// console.log(reset);

const store = configureStore({
  reducer: {
    songs: songsReducer, // reducer is a function which wraps all the functions inside reducers in createSlice
    movies: moviesReducer
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


export  {store,reset,addMovie,removeMovie,addSong,removeSong};
