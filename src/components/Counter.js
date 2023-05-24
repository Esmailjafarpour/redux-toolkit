import React ,{useState} from 'react';
import { useSelector , useDispatch } from "react-redux";
import { selectCounter , increment , decrement , incrementByAmount } from "../features/counter/counterSlice";

const Counter = () => {

     const counter = useSelector(selectCounter)
     const dispatch = useDispatch()
     const [value, setValue] = useState(5);
    
     return (
          <div>
               <h2> Counter is {counter} </h2>
               <button onClick={() => dispatch(increment())}>Increment</button>
               <button onClick={() => dispatch(decrement())}>Decrement</button>
               <input type="number" value={value} onChange={(event)=> setValue(event.target.value)}/>
               <button onClick={() => dispatch(incrementByAmount(+value))}>Decrement</button>
          </div>
     );
}

export default Counter;
