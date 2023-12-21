import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import questions from "./../../assets/data.json";

const initialState = {
  totalPoints: 160,
  currentQuestion: JSON.parse(localStorage.getItem("currentQuestion") || "0"),
  points: JSON.parse(localStorage.getItem("points") || "0"),
  answers: JSON.parse(localStorage.getItem("answers") || "[]"),
  questions,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addPoint: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
      localStorage.setItem("points", state.points.toString());
    },
    nextQuestion: (state, action: PayloadAction<string>) => {
      state.answers.push(action.payload);
      localStorage.setItem("answers", JSON.stringify(state.answers));
      localStorage.setItem(
        "currentQuestion",
        (++state.currentQuestion).toString()
      );
    },
    finishQuiz: (state, action: PayloadAction<string>) => {
      const history = JSON.parse(localStorage.getItem("history") || "[]");
      history.push({
        points: state.points,
        date: Date.now(),
        user: action.payload,
        answers: state.answers,
      });
      localStorage.setItem(
        "history",
        JSON.stringify(history) || `[${state.points}]`
      );
      state.points = 0;
      state.currentQuestion = 0;
      localStorage.setItem("currentQuestion", "0");
      localStorage.setItem("points", "0");
      localStorage.setItem("answers", "[]");
    },
  },
});

export const { addPoint, nextQuestion, finishQuiz } = quizSlice.actions;

export default quizSlice.reducer;
