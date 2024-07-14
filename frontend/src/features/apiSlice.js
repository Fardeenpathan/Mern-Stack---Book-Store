import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';



export const fetchBook = createAsyncThunk("apifetchBook", async() =>{
  const response = await axios.get("http://localhost:5000/book");
  return response.data;
});

const initialState = {
   items: [],
   status: 'idle',
   error: null,
}

export const apiSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) =>{
    builder
    .addCase(fetchBook.pending, (state) => {
      state.status = 'loading';
    })

    .addCase(fetchBook.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
    })

    .addCase(fetchBook.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default apiSlice.reducer