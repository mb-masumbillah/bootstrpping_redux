import App from "@/App";
import { createBrowserRouter } from "react-router-dom";
import Task from "../pages/Task";
import User from "@/pages/User";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Task></Task>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
  },
]);

export default routes;
