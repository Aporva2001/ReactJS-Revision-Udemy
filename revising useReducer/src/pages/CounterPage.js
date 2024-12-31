import React, { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';
import { produce } from 'immer';  // produce is a function to which we pass our reducer function, which returns a wrapped reducer function which can be used to directly update the state.
const INCREMENT_COUNT= 'increment';
const DECREMENT_COUNT= 'decrement';
const CHANGE_VALUE_TO_ADD= 'change';
const HANDLE_SUBMIT= 'handle-submit';

const reducer = (state, action)=>{ //action is an object which helps us to know on which value dispatch function is called.
//  if(action.type === INCREMENT_COUNT){
//   return {
//     ...state,
//     count: state.count+1
//   }
//  }
//  if(action.type === CHANGE_VALUE_TO_ADD){
//   return{
//     ...state,
//     valueToAdd: action.payload
//   }
//  }
//  return state;

// switch(action.type){
//   case INCREMENT_COUNT: return {
//         ...state,
//     count: state.count+1
//   }
//   case DECREMENT_COUNT: return{
//     ...state,
//     count: state.count - 1
//   }
//   case CHANGE_VALUE_TO_ADD: return{
//         ...state,
//     valueToAdd: action.payload
//   }
//   case HANDLE_SUBMIT: return {
//     ...state,
//     count: state.count + state.valueToAdd,
//     valueToAdd: 0
//   }
//   default: return state
// }
switch(action.type){
  case INCREMENT_COUNT: state.count= state.count + 1; 
  return;

  case DECREMENT_COUNT: state.count = state.count -1;
  return;
  case CHANGE_VALUE_TO_ADD: return{
        ...state,
    valueToAdd: action.payload
  }
  case HANDLE_SUBMIT: return {
    ...state,
    count: state.count + state.valueToAdd,
    valueToAdd: 0
  }
  default: return state
}
}

const CounterPage = ({initialCount}) => {
// const [count, setCount] = useState(initialCount);
// const [valueToAdd, setValueToAdd] = useState(0);
// const [state, dispatch] = useReducer(reducer, { // state is an object and dispatch is a function which can be used to change the value of state.
  // when dispatch is called react is going to look at the reducer function.
  const [state, dispatch] = useReducer(produce(reducer), {  
  count:initialCount,
  valueToAdd:0
})

  const handleSubmit = (event)=>{
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({type: HANDLE_SUBMIT})
  }
  const handleChange= (event)=>{
    const value = parseInt(event.target.value) || 0;
   dispatch({
    type: CHANGE_VALUE_TO_ADD,
    payload: value,
   })
  }

  const increment = ()=>{
   dispatch({
    type: INCREMENT_COUNT
   });
  }

  const decrement = ()=>{
    dispatch({
      type: DECREMENT_COUNT
    })
  }
  return (
    <Panel className='m-3'>
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
        <Button onClick= {increment}>Increment</Button>
        <Button onClick= {decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add a Lot</label>
          <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className='p-1 m-3 bg-gray-50 border border-gray-300' />
          <Button>Add it</Button>
        </form>
    </Panel>
  )
}

export default CounterPage

//RULES OF REDUCER FUNCTION
 // whatever we return from reducer function is our brand new state.
 // if nothing is returned then state is set to undefined.
 // It has no async await calls, promises or any reference to outside variables.