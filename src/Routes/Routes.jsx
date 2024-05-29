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
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import ReqFood from "../Pages/ReqFood/ReqFood";
import UpdateMyFood from "../Pages/UpdateMyFood/UpdateMyFood";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        loader: () => fetch("https://hunger-server.vercel.app/foodsCount"),
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
        path: "/myReq-foods",
        element: (
          <PrivateRoute>
            <ReqFood></ReqFood>
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
      {
        path: "/allFood/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMyFood/:id",
        element: (
          <PrivateRoute>
            <UpdateMyFood></UpdateMyFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
