import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import booksItems from '../../booksItems';

const initialState = booksItems;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const itemId = uuidv4();
      action.payload.itemId = itemId;
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.itemId !== action.payload),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
