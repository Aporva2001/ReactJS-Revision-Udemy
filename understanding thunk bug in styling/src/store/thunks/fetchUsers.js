import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers= createAsyncThunk('users/fetch',async ()=>{ // inside this function we are going to make a request and we will return the data which we need to pass to the reducers.
    const response= await axios.get('http://localhost:3005/users');

    await pause(1000);

    return response.data; // This will be automatically assigned to the payload property of the fulfilled action type.

}) // Whenever this function is created we are going to have the three properties available to us automatically.
// Namely: pending, rejected and fulfilled. 

// This is the base type which will be further used to generate the types of action: pending or fulfilled.
// So the action type will be users/fetch/pending.


// The code below can be used to add delay to the code, it is only used for development purposes;

const pause= (duration) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    })
}

export {fetchUsers};