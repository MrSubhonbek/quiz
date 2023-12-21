import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from "../ui/button";
import { Accordion } from "../component/accordion";

import { toDateTime } from "../utils";

type HistoryType = {
  points: number;
  date: number;
  user: string;
  answers: string[];
}[];

export const History = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(-1);

  const history: HistoryType = JSON.parse(
    localStorage.getItem("history") || "[]"
  );

  return (
    <section className="container w-screen h-screen mx-auto border-x border-neutral-300 py-4 gap-2">
      <div className="p-4 flex items-center justify-between border-b">
        <h1 className="text-4xl ">History</h1>
        <Button click={() => navigate("/")}>Go back</Button>
      </div>
      <ol className="my-4 ">
        <li className="px-4 flex items-center h-12 justify-between">
          <p>Date</p>
          <p>Username</p>
          <p>Score</p>
          <p>Quiz</p>
        </li>
        {history.map((item, index) => (
          <Accordion
            key={item.date}
            title={
              <>
                <p>{toDateTime(item.date).toLocaleTimeString("en-US")}</p>
                <p>{item.user}</p>
                <p>{item.points}</p>
                <p>C/C++</p>
              </>
            }
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
            <article>
              <h2>Answers:</h2>
              {item.answers.map((answer, index) => (
                <p key={answer}>
                  {++index}: {answer}
                </p>
              ))}
            </article>
          </Accordion>
        ))}
      </ol>
    </section>
  );
};
