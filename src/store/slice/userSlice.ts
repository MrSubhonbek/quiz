import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") || "User",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<string>) => {
      localStorage.setItem("user", actions.payload);
      state.user = actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
