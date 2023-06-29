import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Set the initial state as an empty array
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      if (action.payload === 'Under Construction') {
        return 'Under Construction';
      }
      return state;
    },
    // Add other reducers if needed
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
