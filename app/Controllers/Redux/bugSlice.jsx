import { createSlice } from '@reduxjs/toolkit';
import {retrieveBugs} from '../bugController'

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {

    getBugs:state => retrieveBugs(),

    createBug: (state, action) => {
      // logic for creating a new bug
      state.push(action.payload); // For example, assuming action.payload contains the bug
    },

    updateBug: (state, action) => {
      // logic for updating an existing bug
      const index = state.findIndex(bug => bug.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload; // Update the bug with the new data
      }
    },

    markComplete: (state, action) => {
      // logic for marking a bug as complete
      const index = state.findIndex(bug => bug.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = true; // Mark the bug as completed
      }
    }
  }
});

export default slice.reducer;
export const { getBugs, createBug, updateBug, markComplete } = slice.actions;
