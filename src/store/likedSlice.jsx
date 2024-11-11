import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedSlice:[]
}

export const LikedSlice = createSlice({
    name:'Like',
    initialState,
    reducers:{
        savedLikedProducts:(state,action) => {
            return{
                likedSlice:[...state.likedList, action.payload]
            }
        }
    }
})

export const {savedLikedProducts} = LikedSlice.actions