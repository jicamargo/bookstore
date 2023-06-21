/* eslint-disable camelcase */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL, appId } from './apiconfig';

// Async action creator
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/apps/${appId}/books`);
    const booksArray = Object.entries(response.data).flatMap(
      ([item_id, books]) => books.map(
        ({ title, author, category }) => ({
          title, author, category, item_id,
        }),
      ),
    );
    return booksArray;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
});

export const addBook = createAsyncThunk('books/addBook', async ({ book }) => {
  try {
    const newItemId = uuidv4();
    const updatedBook = {
      item_id: book.item_id || newItemId,
      ...book,
      category: book.category || '',
    };
    const response = await axios.post(`${BASE_URL}/apps/${appId}/books`, updatedBook);
    // return response.data;
    if (response.data === 'Created') {
      return updatedBook;
    }
    throw new Error('Failed to add book');
  } catch (error) {
    throw new Error('Failed to add book');
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async ({ item_id }) => {
  try {
    const response = await axios.delete(`${BASE_URL}/apps/${appId}/books/${item_id}`);
    if (response.data === 'The book was deleted successfully!') {
      return { item_id };
    }
    return {};
  } catch (error) {
    throw new Error('Failed to remove book');
  }
});

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled,
        (state, action) => state.filter((book) => book.item_id !== action.payload.item_id));
  },
});

export default booksSlice.reducer;
