import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Nuclear from "./pages/NuclearEnergy";
import NuclearInEthiopia from "./pages/Ethiopia";
import Benefits from "./pages/Benefits";
import Layout from "./pages/Layout";
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
