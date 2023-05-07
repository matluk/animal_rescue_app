import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import AnimalList from "./components/AnimalList/AnimalList.jsx";
import AnimalCreate from "./components/AnimalCreate/AnimalCreate.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import Donations from "./components/Donations/Donations.jsx";
import AppBar from "./components/AppBar.jsx";
import { UserRoleContext } from "./utils/context/role.js";
import routes from "./routes.js";
import { Container } from "@mui/material";

const router = createBrowserRouter([
  {
    path: routes.about.path,
    element: <About />,
  },
  {
    path: routes.animalList.path,
    element: <AnimalList />,
  },
  {
    path: routes.animalCreate.path,
    element: <AnimalCreate />,
  },
  {
    path: routes.donations.path,
    element: <Donations />,
  },
  {
    path: routes.notifications.path,
    element: <Notifications />,
  },
]);

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <UserRoleContext.Provider value={isAdmin}>
      <AppBar setIsAdmin={setIsAdmin} router={router} />
      <Container maxWidth="xl">
        <RouterProvider router={router} />
      </Container>
    </UserRoleContext.Provider>
  );
}

export default App;
