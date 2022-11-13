import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Search = {
    start: string;
    end: string;
    startDate: string;
    endDate: string;
}

const values: Search = {
    start: '',
    end: '',
    startDate: '',
    endDate: ''
}

const searchSlice = createSlice({
    name: "form",
    initialState:{
        values
    },
    reducers: {
        getValues(state, action: PayloadAction<Search>){
            state.values = action.payload
        }
    }
})

export default searchSlice.reducer
export const {getValues} = searchSlice.actions
