import { ReactNode } from "react";

export const Button = ({
  click,
  children,
  className,
  disable,
}: {
  children: ReactNode;
  disable?: boolean;
  className?: string | boolean;
  click?: () => void;
}) => {
  return (
    <button
      disabled={disable}
      onClick={click}
      className={`px-3 py-2 hover:bg-neutral-600 bg-transparent border-neutral-600 border hover:border-transparent  ${className}`}>
      {children}
    </button>
  );
};
