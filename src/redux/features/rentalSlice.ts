import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { rentalsItem } from "../../../interface";

type RentalState = {
    rentalsItem: rentalsItem[]
}

const initialState:RentalState = { rentalsItem:[] }

export const rentalSlice = createSlice({
    name: "rental",
    initialState,
    reducers: {
        addBooking : (state, action:PayloadAction<rentalsItem>) => {
            const remainingRentals = state.rentalsItem.filter( obj => {
                return (obj.id !== action.payload.id)
            })
            state.rentalsItem = remainingRentals
            state.rentalsItem.push(action.payload)
        },
        removeBooking : (state, action:PayloadAction<string>) => {
            const remainingRentals = state.rentalsItem.filter( obj => {
                return (obj.id !== action.payload)
            })
            state.rentalsItem = remainingRentals
        }
    }
})

export const { addBooking, removeBooking } = rentalSlice.actions
export default rentalSlice.reducer