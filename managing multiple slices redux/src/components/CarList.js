import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCar } from '../store'
import { createSelector } from '@reduxjs/toolkit'


const CarList = () => {
    const dispatch= useDispatch();
//    const cars= useSelector((state)=>{
//         return state.cars.data; 
//     })
        // const cars= useSelector(({cars: {data, searchTerm}})=>{
        //     return data.filter((car) => {
        //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
        //     })
        // })
    const memoizedCars= createSelector([(state)=> state.cars.data, (state) => state.cars.searchTerm],(data, searchTerm) =>
        data.filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ))

    const cars= useSelector(memoizedCars)

    const name= useSelector((state) => state.form.name)

    const handleCarDelete = (car)=>{
        const action = removeCar(car.id);
        dispatch(action);
    }
    const renderedCars= cars.map((car)=>{
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return(
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - $ {car.cost}
                </p>
                <button onClick={()=> handleCarDelete(car)} className='button is-danger'>
                Delete
                </button>
            </div>
        )
    })
  return (
    <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
  )
}

export default CarList