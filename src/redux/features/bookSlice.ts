import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type BookState = {
    bookItems: BookingItem[]
}

const initialState:BookState = { bookItems:[] }

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBooking : (state, action:PayloadAction<BookingItem>) => {
            const remainingBooks = state.bookItems.filter( obj => {
                return (obj.id !== action.payload.id)
            })
            state.bookItems = remainingBooks
            state.bookItems.push(action.payload)
        },
        removeBooking : (state, action:PayloadAction<string>) => {
            const remainingBooks = state.bookItems.filter( obj => {
                return (obj.id !== action.payload)
            })
            state.bookItems = remainingBooks
        }
    }
})

export const { addBooking, removeBooking } = bookSlice.actions
export default bookSlice.reducer