import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk){
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch= useDispatch();
  
    const runThunk = useCallback((arg)=>{ 
      setisLoading(true);
      dispatch(thunk(arg))
      .unwrap()
      .catch((err) => setError(err))
      .finally(()=> setisLoading(false))
    },[dispatch,thunk])
  
    return [runThunk, isLoading, error];
  }

export {useThunk};