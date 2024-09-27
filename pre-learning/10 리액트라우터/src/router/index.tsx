import { createBrowserRouter } from "react-router-dom";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import DefaultLayout from "../layouts/DefaultLayout";
import DetailView from "../views/DetailView";
import EmptyLayout from "../layouts/EmptyLayout";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/about",
        element: <AboutView />,
      },
      {
        path: "/detail/:id",
        element: <DetailView />,
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: "/auth",
        element: <h1>Auth Page</h1>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

export default router;
