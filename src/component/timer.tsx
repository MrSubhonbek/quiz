import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../store/hook";
import { resetTimer, tick } from "../store/slice/timerSlice";
import { finishQuiz } from "../store/slice/quizSlice";

export const Timer = () => {
  const secRemaining = useAppSelector((state) => state.timer.timer);
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mins = Math.floor(secRemaining / 60);
  const seconds = secRemaining % 60;

  if (secRemaining === 0) {
    dispatch(finishQuiz(user));
    dispatch(resetTimer());
    navigate("/history");
  }
  useEffect(function () {
    const id = setInterval(function () {
      dispatch(tick());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
};
