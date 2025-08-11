import { createBrowserRouter} from "react-router";
import Mainlayout from "../layouts/Mainlayout";

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Mainlayout
  }
]);