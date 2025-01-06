import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser =  createAsyncThunk('users/remove',async (user)=>{

// const response= 
await axios.delete(`http://localhost:3005/users/${user.id}`)
// whenever we make a delete request the response is an empty object so if we will return it payload will be empty
    // return response.data;
    return user;

})

export {removeUser}