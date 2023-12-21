import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hook";
import { addPoint, finishQuiz, nextQuestion } from "../store/slice/quizSlice";
import { resetTimer } from "../store/slice/timerSlice";

import { Button } from "../ui/button";
import { Timer } from "../component/timer";
import { Progress } from "../component/progress";

import { shuffle } from "../utils";

export const Quiz = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);
  const questions = useAppSelector((state) => state.quiz.questions);
  let currentQuestion = useAppSelector((state) => state.quiz.currentQuestion);

  const [isShow, setIsShow] = useState(false);
  const [response, setResponse] = useState("");
  const [disable, setDisable] = useState(false);

  const handleAnswer = (answer: string) => {
    setDisable(true);
    setResponse(answer);
    setIsShow(true);
    setTimeout(() => {
      if (answer === questions[currentQuestion].correctOption)
        dispatch(addPoint(questions[currentQuestion].points));
      if (questions.length === ++currentQuestion) {
        dispatch(finishQuiz(user));
        dispatch(resetTimer());

        navigate("/history");
      } else dispatch(nextQuestion(answer));
      setDisable(false);
    }, 2000);
    setTimeout(() => {
      setIsShow(false);
    }, 1990);
  };
  const [colorProgress, setColorProgress] = useState({
    primaryColor: "#f43f5e",
    secondaryColor: "#f43f5e",
  });

  var progress = ((currentQuestion + 1) / questions.length) * 100 - 10;

  var arr = useMemo(
    () => shuffle([...questions[currentQuestion].options]),
    [currentQuestion]
  );

  useEffect(() => {
    if (progress >= 30 && progress < 65) {
      setColorProgress({
        primaryColor: "#f43f5e",
        secondaryColor: "#f59e0b",
      });
    } else if (progress > 65) {
      setColorProgress({
        primaryColor: "#f43f5e",
        secondaryColor: "#84cc16",
      });
    }
  }, [progress]);

  return (
    <section className="w-screen h-screen container mx-auto border-x border-neutral-300 py-4 gap-2">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-4xl ">Name Quiz</h1>
        <Button click={() => navigate("/")}>Go back</Button>
      </div>

      <section className="m-4">
        <Progress
          className="space my-4"
          label={`Question: ${currentQuestion + 1}/${questions.length}`}
          {...colorProgress}
          darkTheme
          score={progress}
        />

        <section>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="flex flex-col my-4 gap-2">
            {arr.map((answer) => (
              <Button
                disable={disable}
                key={answer}
                className={
                  isShow &&
                  answer === response &&
                  `${
                    response === questions[currentQuestion].correctOption
                      ? "border-lime-400 hover:!border-lime-400 "
                      : "border-rose-400 hover:!border-rose-400 "
                  } cursor-default`
                }
                click={() => {
                  handleAnswer(answer);
                }}>
                {answer}
              </Button>
            ))}
          </div>
        </section>

        <section className="flex gap-2">
          <h2>Time:</h2>
          <Timer />
        </section>
      </section>
    </section>
  );
};
