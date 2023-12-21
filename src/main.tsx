import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./page/home.tsx";
import { ErrorPage } from "./page/error-page.tsx";
import { Quiz } from "./page/quiz.tsx";
import { History } from "./page/history.tsx";

import { store } from "./store/index.ts";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <History />,
    errorElement: <ErrorPage />,
  },
  {
    path: "quiz/:quizId",
    element: <Quiz />,
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
