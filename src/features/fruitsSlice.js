import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {1: 'banana', 2: 'pear', 3: 'orange', 4: 'peach'}
]

const fruitsSlice = createSlice({
    name: 'fruits',
    initialState,
    reducers: {}
})

export default fruitsSlice.reducer