import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timer: 100,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    resetTimer: (state) => {
      state.timer = 100;
    },
    tick: (state) => {
      if (state.timer) state.timer = --state.timer;
    },
  },
});

export const { resetTimer, tick } = timerSlice.actions;

export default timerSlice.reducer;
