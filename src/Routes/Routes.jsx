import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UpdatedUser from "../UpdatedUser/UpdatedUser";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import MyFoods from "../Pages/MyFoods/MyFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allFood"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            {" "}
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/available-foods",
        element: <AvailableFood></AvailableFood>,
        loader: () => fetch("http://localhost:5000/allFood"),
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdatedUser></UpdatedUser>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
