import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     numberValue : 5
}

const numberSlice = createSlice({
     name : "number",
     initialState,
     reducers : {
          increment : (state) => {
               state.numberValue++;
          },
          decrement : (state) => {
               state.numberValue--;
          },
          incrementByAmount : (state , action) => {
               state.numberValue += action.payload
          }
     }
})

export default numberSlice.reducer;
export const { incrementByAmount , increment , decrement } = numberSlice.actions;
export const selectNumber = (store) => store.number.numberValue;
