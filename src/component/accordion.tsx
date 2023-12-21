import { ReactNode } from "react";

export const Accordion = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}: {
  title: ReactNode;
  children: ReactNode;
  index: number;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}) => {
  const handleSetIndex = (index: number) => {
    activeIndex !== index ? setActiveIndex(index) : setActiveIndex(-1);
  };

  return (
    <li>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex p-2 mt-2 hover:bg-neutral-600">
        <div className=" flex w-full items-center h-12 justify-between  cursor-pointer">
          {title}
        </div>
      </div>

      {activeIndex === index && <div className=" p-4 mb-6">{children}</div>}
    </li>
  );
};
