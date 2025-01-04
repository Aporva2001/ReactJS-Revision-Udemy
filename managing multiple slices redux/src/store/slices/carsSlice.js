import { createSlice,nanoid } from "@reduxjs/toolkit"; // nanoid is used if we want to generate a randomly generated string.

const carSlice= createSlice({
    name:'cars',
    initialState: {
        searchTerm: "",
        data: []
    },
    reducers: {
        addCar(state,action){
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid() // This will be generated on the fly by us when the action is dispatched to this function.
            });
        },
        removeCar(state,action){
            // action.payload is going to be the id of the car which we want to remove.
           const updated= state.data.filter((car)=>{
            return car.id  !== action.payload;
           })

           state.data=updated;
        },
        changeSearchTerm(state,action){
            state.searchTerm=action.payload;
        }
    }
})

export const {
    changeSearchTerm,
    addCar,
    removeCar
} = carSlice.actions;

export const carsReducer= carSlice.reducer;