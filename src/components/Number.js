import React , {useState} from 'react';
import { useSelector , useDispatch } from "react-redux";
import { selectNumber , increment , decrement , incrementByAmount } from "../features/number/numberSlice";

const Number = () => {
     const number = useSelector(selectNumber)
     const dispatch = useDispatch()
     const [numberValue, setNumberValue] = useState(20);
     return (
          <div>
               <h4>Number is {number}</h4>

               <button onClick={()=> dispatch(increment())}>Increment</button>
               <button onClick={()=> dispatch(decrement())}>Decrement</button>
               <input type="number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}/>
               <button onClick={()=> dispatch(incrementByAmount(+numberValue))}>incrementByAmount</button>

          </div>
     );
}

export default Number;
