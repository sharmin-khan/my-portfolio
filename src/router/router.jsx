import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Project from "../component/Projects";
import ProjectDetails from "../projectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {path: 'projects',
        element: <Project />
      },
      {
        path:'projects/:id',
        element: <ProjectDetails />
      }
    ],
  },
]);
