import {combineReducers, configureStore} from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

const rootReducer = combineReducers({
    search: searchSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
