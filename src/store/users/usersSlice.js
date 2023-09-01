import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoading: true,
    error: undefined,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers' , async () => {
    try{
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw error;
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
            state.error = null;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
})

export const selectUsers = (state) => state.users;

export default userSlice.reducer