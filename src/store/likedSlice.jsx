import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    likedList: []
}

export const LikedSlice = createSlice({
    name: 'Like',
    initialState,
    reducers: {
        savedLikedProducts: (state, action) => {
            if (action.payload.isLiked) {
                return {
                    likedList: [...state.likedList, action.payload]
                }
            }
            else {
                const list = state.likedList.filter(item => item.id != action.payload.id)
                return {
                    likedList:list
                }
            }
        },
        deleteLikeProducts: (state, action) => {
            const list = state.likedList.filter(item => item.id != action.payload.id)
            return {
                likedList: list
            }
        }
    }
})

export const { savedLikedProducts, deleteLikeProducts } = LikedSlice.actions