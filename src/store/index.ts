import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userSlice from "./slice/userSlice";
import quizSlice from "./slice/quizSlice";
import timerSlice from "./slice/timerSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice,
    timer: timerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
