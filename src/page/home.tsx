import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hook";
import { setUser } from "../store/slice/userSlice";

import { Button } from "../ui/button";
import { EditSvg } from "../assets/EditSvg";
import { SaveSvg } from "../assets/SaveSvg";

const quiz = [
  {
    name: "Quiz for programming",
    id: 0,
  },
];

export const App = () => {
  const navigate = useNavigate();
  const [isEditUsername, setIsEditUsername] = useState(false);
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const handleChangeEditUsername = () => {
    setIsEditUsername((state) => !state);
  };

  return (
    <section className="w-screen h-screen container mx-auto border-x border-neutral-300 py-4 gap-2">
      <div className="px-4 border-b pb-4">
        <h1 className="text-4xl">The Quiz</h1>
        <div className="flex items-center">
          <p className="text-4xl">
            Welcome
            {isEditUsername ? (
              <input
                value={user}
                onChange={(e) => {
                  dispatch(setUser(e.target.value));
                }}
                className="bg-transparent outline-none mx-4 border px-2 h-10"
                placeholder={user}
              />
            ) : (
              <b className="text-white">{" " + user}</b>
            )}
          </p>
          {isEditUsername ? (
            <SaveSvg click={handleChangeEditUsername} />
          ) : (
            <EditSvg click={handleChangeEditUsername} />
          )}
          <Button
            className="ml-auto"
            click={() => {
              navigate("/history");
            }}>
            History
          </Button>
        </div>
      </div>

      <section className=" mt-4 mx-4">
        <h2 className="text-2xl">Select Quiz</h2>
        <div className="mt-4 flex flex-col">
          {quiz.map(({ name, id }) => (
            <article
              key={id}
              onClick={() => {
                navigate(`/quiz/${id}`);
              }}
              className="flex justify-between items-center border-b p-4 cursor-pointer hover:bg-neutral-600">
              <h2>{name}</h2>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
};
