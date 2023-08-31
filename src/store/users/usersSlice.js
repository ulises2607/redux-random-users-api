import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: true,
    error: undefined,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default userSlice.reducer