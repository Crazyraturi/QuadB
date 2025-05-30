import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const CartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        add( state,action){
        state.push(action.payload);

        },
        remove(state,action){
         return  state.filter((item)=>item.id!==action.payload.id)
        },

    }
})

export const {add,remove} = CartSlice.actions;

export default CartSlice.reducer;