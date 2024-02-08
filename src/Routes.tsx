import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout.tsx";
import Homepage from "./pages/Homepage.tsx";
import PrivateRoutes from "./routes/PrivateRoutes.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "register",
        element: <RegistrationPage></RegistrationPage>,
      },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
    ],
  },
]);

export default router;
