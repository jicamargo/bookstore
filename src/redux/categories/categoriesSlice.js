import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under fconstruction'; // Set the initial state as "Under construction"
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // reducers specific to categories if needed
  },
});

export const { actions } = categoriesSlice;
export default categoriesSlice.reducer;
