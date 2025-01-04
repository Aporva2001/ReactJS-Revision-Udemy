import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCar, changeCost, changeName } from '../store'




const CarForm = () => {
    const dispatch = useDispatch();
    const handleNameChange = (event)=>{
        const action = changeName(event.target.value);
        dispatch(action);
    }

    const handleCostChange= (event)=>{
        const carCost = parseInt(event.target.value) || 0;
        const action= changeCost(carCost);
        dispatch(action);
    }

    const handleSubmit= (event)=>{
        event.preventDefault();
        dispatch(addCar({name, cost}))
    }
//    const {name, cost}= useSelector((state)=>{ // This is the big state 
    const name= useSelector((state) => state.form.name);
    const cost= useSelector((state) => state.form.cost);
        // return state.form.name; // This is the value which we want to access from the big state.
        // return{
        //     name: state.form.name,
        //     cost: state.form.cost
        // }

  return (
    <div className='car-form panel'>
        <h4 className='subtitle is-3'>Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className='field-group'>
            <div className="field">
                <label className="name">Name</label>
                <input type="text" className="input is-expanded" value={name} onChange={handleNameChange} />
            </div>
            <div className="field">
                <label className="label">Cost</label>
                <input type="number" className="input is-expanded" value={cost || ''} onChange={handleCostChange} />
            </div>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default CarForm