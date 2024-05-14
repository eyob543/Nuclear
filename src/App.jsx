import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Nuclear from "./pages/NuclearEnergy";
import NuclearInEthiopia from "./pages/Ethiopia";
import Benefits from "./pages/Benefits";
import Layout from "./pages/Layout";
import Suggestions from "./pages/Suggestions";
import ViewSuggestions from "./pages/ViewSuggestion";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "layout",
      element: <Layout />,
      children: [
        {
          path: "nuclear",
          element: <Nuclear />,
        },
        {
          path: "benefits",
          element: <Benefits />,
        },
        {
          path: "nuclear-in-ethiopia",
          element: <NuclearInEthiopia />,
        },
        {
          path: "suggestions",
          element: <Suggestions />,
        },
        {
          path: "view-suggestions",
          element: <ViewSuggestions />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
