import {
  useNavigate,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

import { Button } from "../ui/button";

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) return null;

  return (
    <section className="w-screen h-screen flex items-center justify-center flex-col gap-2">
      <h1 className="text-4xl">Something went wrong 😢</h1>
      <p>{error.data}</p>
      <Button click={() => navigate(-1)}>&larr; Go back</Button>
    </section>
  );
};
