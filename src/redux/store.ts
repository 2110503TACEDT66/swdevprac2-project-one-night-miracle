import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rentalSlice from "./features/rentalSlice";
import { useSelector,TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
    reducer: {
        rentalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector